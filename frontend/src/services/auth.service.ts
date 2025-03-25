import axios from 'axios';

const API_URL = 'http://localhost:3000';

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface AuthResponse {
  access_token: string;
}

class AuthService {
  async login(data: LoginData): Promise<AuthResponse> {
    const response = await axios.post(`${API_URL}/auth/login`, data);
    if (response.data.access_token) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  }

  async register(data: RegisterData): Promise<any> {
    const response = await axios.post(`${API_URL}/auth/register`, data);
    return response.data;
  }

  logout(): void {
    localStorage.removeItem('user');
  }

  getCurrentUser(): any {
    const userStr = localStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    return null;
  }
}

export default new AuthService(); 