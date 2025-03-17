const { VITE_API_BASE_URL } = import.meta.env;

const apiFetch = async (requestUrl: string, options?: RequestInit) => {
  console.log(`${VITE_API_BASE_URL}`);
  const res = await fetch(`${VITE_API_BASE_URL}/${requestUrl}`, options);
  return res.json();
};

export default apiFetch;
