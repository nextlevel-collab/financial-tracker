const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error("Missing NEXT_PUBLIC_API_URL environment variable");
}

// Example export function using the API
export async function fetchDemoData() {
  const response = await fetch(`${API_URL}/api/data`);
  
  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json();
}

