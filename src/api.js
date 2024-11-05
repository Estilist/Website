const apiUrl = import.meta.env.VITE_API_URL;

const request = async (endpoint, method = 'GET', body = null, json = true) => {
  const options = {
    method,
  };
  
  if (body) {
    if (json) {
        options.headers = {
            'Content-Type': 'application/json',
        };
        options.body = JSON.stringify(body);
    }
    else
        options.body = body;
  }

  if (method === 'GET') {
    // Add ?format=json
    endpoint += '?format=json';
  }

  const response = await fetch(`${apiUrl}${endpoint}`, options);
  if (!response.ok) {
    const errorData = await response.json();
    
    const error = new Error(errorData.error || 'Error en la solicitud');
    error.status = response.status;

    throw error;
  }
  return await response.json();
};

export default request;