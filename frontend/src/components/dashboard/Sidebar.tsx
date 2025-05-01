import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
      <aside className="w-64 bg-gray-800 text-white h-screen p-4">
        <h2 className="text-2xl font-bold mb-6">Panel</h2>
        <nav>
          <ul className="space-y-4">
            <li><Link to="/dashboard">IA Creativa</Link></li>
            <li><Link to="/history">Historial</Link></li>
            <li><button onClick={() => {
              localStorage.removeItem('token');
              window.location.href = '/login';
            }}>Cerrar sesión</button></li>
          </ul>
        </nav>
      </aside>
    );
  };
export default Sidebar