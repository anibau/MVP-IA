import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';

export default function Dashboard() {
  const [content, setContent] = useState([
    {
      id: 1,
      title: 'Inspiración 1',
      description: 'Descripción de la inspiración',
      imageUrl: 'https://via.placeholder.com/300',
      likes: 0,
      views: 0,
    },
    // Más contenido aquí
  ]);

  return (
    <div className="container">
      <div className="flex justify-between items-center mt-8 mb-8">
        <h1>Mi Dashboard</h1>
        <button className="btn btn-primary flex items-center gap-2">
          <PlusIcon className="w-5 h-5" />
          Nueva Inspiración
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {content.map((item) => (
          <div key={item.id} className="card">
            <img src={item.imageUrl} alt={item.title} className="w-full" style={{ height: '200px', objectFit: 'cover' }} />
            <div className="mt-4">
              <h2>{item.title}</h2>
              <p className="mt-2">{item.description}</p>
              <div className="flex justify-between items-center mt-4">
                <div className="flex gap-4">
                  <span>{item.likes} Me gusta</span>
                  <span>{item.views} Vistas</span>
                </div>
                <button className="btn btn-secondary">
                  Editar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 