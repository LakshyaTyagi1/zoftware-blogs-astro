import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const locale = url.searchParams.get('locale') || 'global';
  
  try {
    const baseUrl = import.meta.env.PUBLIC_API_URL;
    console.log('PUBLIC_API_URL:', baseUrl);
    
    if (!baseUrl) {
      console.error('PUBLIC_API_URL is not set in environment variables');
      return new Response(JSON.stringify({ error: 'API URL not configured' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    const apiUrl = `${baseUrl}/master/getAllCategoriesbasedSubCategories/${locale}`;
    console.log('Fetching categories from:', apiUrl);
    
    const response = await fetch(apiUrl);
    console.log('Response status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('API error response:', errorText);
      return new Response(JSON.stringify({ error: 'Failed to fetch categories', details: errorText }), {
        status: response.status,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    const data = await response.json();
    console.log('Categories fetched successfully, count:', data?.data?.length || 0);
    
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return new Response(JSON.stringify({ 
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
