import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe/server';

export async function POST(request: NextRequest) {
  try {
    const { name, description, pricePerMonth, imageUrl } = await request.json();

    if (!name || !pricePerMonth) {
      return NextResponse.json(
        { error: 'Name and pricePerMonth are required' },
        { status: 400 }
      );
    }

    // Create product in Stripe
    const product = await stripe().products.create({
      name,
      description,
      images: imageUrl ? [imageUrl] : [],
    });

    // Create price for the product (monthly subscription)
    const price = await stripe().prices.create({
      product: product.id,
      unit_amount: Math.round(pricePerMonth * 100), // Convert to cents
      currency: 'eur',
      recurring: {
        interval: 'month',
      },
    });

    return NextResponse.json({
      productId: product.id,
      priceId: price.id,
    });
  } catch (error: any) {
    console.error('Error creating Stripe product:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create product' },
      { status: 500 }
    );
  }
}

