import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    const token = this.getToken();
    return token ? jwtDecode<JwtPayload>(token) : null;
  }

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token: string) {
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      if (!decoded.exp) return true;
      const now = Date.now() / 1000;
      return decoded.exp < now;
    } catch (err) {
      return true;
    }
  }

  getToken(): string {
    return localStorage.getItem('kanban_token') || '';
  }

  login(idToken: string) {
    localStorage.setItem('kanban_token', idToken);
    window.location.assign('/board'); // Change route if needed
  }

  logout() {
    localStorage.removeItem('kanban_token');
    window.location.assign('/login'); // Change route if needed
  }
}

export default new AuthService();
