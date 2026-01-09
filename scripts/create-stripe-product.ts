/**
 * Utility script to create Stripe products for cars
 * Run with: npx tsx scripts/create-stripe-product.ts
 */

import { strapiClient } from '../lib/strapi/config';
import { stripe } from '../lib/stripe/server';
import { getStrapiFullImageUrl } from '../lib/strapi/config';

async function createStripeProducts() {
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
  if (!STRAPI_URL) {
    console.error('Error: Strapi URL not configured. Please set NEXT_PUBLIC_STRAPI_URL in your .env.local file.');
    process.exit(1);
  }

  try {
    // Fetch all cars without Stripe IDs
    const response = await strapiClient.get('/cars', {
      params: {
        'filters[$or][0][stripeProductId][$null]': true,
        'filters[$or][1][stripeProductId][$eq]': '',
        populate: 'image',
      },
    });

    const cars = response.data.data || [];
    console.log(`Found ${cars.length} cars without Stripe products`);

    for (const car of cars) {
      try {
        const carData = car.attributes || car;
        const imageUrl = carData.image
          ? getStrapiFullImageUrl(carData.image)
          : undefined;

        // Create product in Stripe
        const product = await stripe().products.create({
          name: carData.name,
          description: carData.description || '',
          images: imageUrl ? [imageUrl] : [],
        });

        // Create price for the product (monthly subscription)
        const price = await stripe().prices.create({
          product: product.id,
          unit_amount: Math.round(carData.pricePerMonth * 100), // Convert to cents
          currency: 'eur',
          recurring: {
            interval: 'month',
          },
        });

        // Update car in Strapi with Stripe IDs
        await strapiClient.put(`/cars/${car.id}`, {
          data: {
            stripeProductId: product.id,
            stripePriceId: price.id,
          },
        });

        console.log(`✓ Created Stripe product for: ${carData.name}`);
        console.log(`  Product ID: ${product.id}`);
        console.log(`  Price ID: ${price.id}`);
      } catch (error: any) {
        console.error(`✗ Error creating product for ${car.attributes?.name || car.name}:`, error.message);
      }
    }

    console.log('\nDone!');
  } catch (error: any) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

createStripeProducts();

