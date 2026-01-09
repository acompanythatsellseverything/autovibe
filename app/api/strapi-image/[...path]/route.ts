import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path: pathArray } = await params;
    // Join path segments and preserve query string from request
    const imagePath = pathArray.join('/');
    const searchParams = request.nextUrl.searchParams.toString();
    const fullPath = searchParams ? `${imagePath}?${searchParams}` : imagePath;
    
    // Get Strapi URL from environment
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
    
    // Construct the full URL to the Strapi image
    // Remove leading slash if present to avoid double slashes
    const cleanPath = fullPath.startsWith('/') ? fullPath.slice(1) : fullPath;
    const imageUrl = `${strapiUrl}/${cleanPath}`;
    
    // Fetch the image from Strapi
    const response = await fetch(imageUrl, {
      cache: 'force-cache', // Cache images for better performance
    });
    
    if (!response.ok) {
      return new NextResponse('Image not found', { status: 404 });
    }
    
    // Get the image data
    const imageBuffer = await response.arrayBuffer();
    
    // Get content type from Strapi response or default to image
    const contentType = response.headers.get('content-type') || 'image/jpeg';
    
    // Return the image with proper headers
    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable', // Cache for 1 year
      },
    });
  } catch (error) {
    console.error('Error proxying Strapi image:', error);
    return new NextResponse('Error loading image', { status: 500 });
  }
}
