type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface RequestOptions {
  headers?: Record<string, string>;
  body?: any;
}

const BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

async function request<T>(
  method: HttpMethod,
  url: string,
  data?: any,
  options: RequestOptions = {}
): Promise<{ data: T }> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  const config: RequestInit = {
    method,
    headers,
    credentials: 'include', // cookie-based auth
  };

  if (data) {
    config.body = JSON.stringify(data);
  }

  const fullUrl = url.startsWith('http') ? url : `${BASE_URL}${url}`;

  const response = await fetch(fullUrl, config);

  const responseText = await response.text();
  let responseData;
  try {
    responseData = responseText ? JSON.parse(responseText) : null;
  } catch {
    responseData = responseText;
  }

  if (!response.ok) {
    const error = {
      response: {
        data: responseData,
        status: response.status,
      },
      message: responseData?.message || response.statusText || 'Unknown error',
    };
    return Promise.reject(error);
  }

  return { data: responseData as T };
}

export async function get<T>(url: string, options?: RequestOptions): Promise<{ data: T }> {
  return request<T>('GET', url, undefined, options);
}

export async function post<T>(
  url: string,
  data?: any,
  options?: RequestOptions
): Promise<{ data: T }> {
  return request<T>('POST', url, data, options);
}

export async function put<T>(
  url: string,
  data?: any,
  options?: RequestOptions
): Promise<{ data: T }> {
  return request<T>('PUT', url, data, options);
}

export async function del<T>(url: string, options?: RequestOptions): Promise<{ data: T }> {
  return request<T>('DELETE', url, undefined, options);
}
