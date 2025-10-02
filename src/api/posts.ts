// Posts API call (JSONPlaceholder)
export async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts'); // async fetch
  if (!res.ok) throw new Error('Failed to fetch posts'); // network/non-2xx guard
  return res.json(); // parse JSON
}
