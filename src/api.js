const apiUrl = import.meta.env.VITE_API_URL;

const request = async (endpoint, method = 'GET', body = null, json = true) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  
  if (body) {
    if (json)
        options.body = JSON.stringify(body);
    else
        options.body = body;
  }

  try {
    const response = await fetch(`${apiUrl}${endpoint}`, options);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error en la solicitud');
    }
    return await response.json();
  } catch (error) {
    console.error(`Error en ${method} ${endpoint}:`, error);
    throw error;
  }
};

export default request;