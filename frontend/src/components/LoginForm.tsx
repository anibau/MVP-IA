import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import { AppDispatch } from '../store';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(login({ email, password }));
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password" className="form-label">
          Contraseña
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary w-full">
        Iniciar Sesión
      </button>
    </form>
  );
} 