const apiUrl = import.meta.env.VITE_API_URL;

export const request = async (endpoint, method = 'GET', body = null, json = true) => {
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

export const uploadToBlobStorage = async (file) => {
    try {
        // Obtener la URL de subida desde el backend
        const uploadUrlResponse = await request('/get-upload-url/', 'GET');
        const { uploadUrl, fileUrl } = uploadUrlResponse;

        // Subir el archivo a Blob Storage
        await fetch(uploadUrl, {
            method: 'PUT',
            headers: {
                'Content-Type': file.type,
            },
            body: file,
        });

        return fileUrl;
    } catch (error) {
        console.error('Error al subir a Blob Storage:', error);
        throw error;
    }
};

export default request;