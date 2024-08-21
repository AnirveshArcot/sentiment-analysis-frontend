export const analyzeSentiment = async (sentence) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    console.log(apiUrl)
    const response = await fetch(`${apiUrl}/analyze/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: sentence })
    });
  
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    return await response.json();
  };
  