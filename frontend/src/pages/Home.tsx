import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Inspírate y Comparte
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Descubre contenido inspirador y comparte tus propias ideas con la comunidad.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/login" className="btn-primary">
              Iniciar Sesión
            </Link>
            <Link to="/register" className="btn-secondary">
              Registrarse
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Comparte tu Inspiración
            </h3>
            <p className="text-gray-600">
              Sube y comparte contenido que inspire a otros.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Descubre Nuevas Ideas
            </h3>
            <p className="text-gray-600">
              Explora contenido inspirador de la comunidad.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Conecta con Otros
            </h3>
            <p className="text-gray-600">
              Interactúa con personas que comparten tus intereses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 