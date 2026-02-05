export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async ({ request }) => {
  const url = new URL(request.url);
  const locale = url.searchParams.get("locale") || "global";
  try {
    const baseUrl = "https://api.zoftwarehub.com/api/v1";
    console.log("PUBLIC_API_URL:", baseUrl);
    if (!baseUrl) ;
    const apiUrl = `${baseUrl}/master/getAllCategoriesbasedSubCategories/${locale}`;
    console.log("Fetching categories from:", apiUrl);
    const response = await fetch(apiUrl);
    console.log("Response status:", response.status);
    if (!response.ok) {
      const errorText = await response.text();
      console.error("API error response:", errorText);
      return new Response(JSON.stringify({ error: "Failed to fetch categories", details: errorText }), {
        status: response.status,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const data = await response.json();
    console.log("Categories fetched successfully, count:", data?.data?.length || 0);
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
    return new Response(JSON.stringify({
      error: "Internal server error",
      message: error instanceof Error ? error.message : "Unknown error"
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
