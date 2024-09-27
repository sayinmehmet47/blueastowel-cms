// lib/api.ts
export const getMainPgData = async () => {
  console.log('API call to main-page');
  const response = await fetch(`${process.env.URL}/api/main-page`, {
    cache: 'no-store',
  });
  const data = await response.json();
  return data.docs[0];
};
