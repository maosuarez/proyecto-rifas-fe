import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-gray-800">RifaApp</h2>
            <p className="text-gray-600">
              La mejor plataforma para tus rifas online
            </p>
          </div>
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-800">
              Inicio
            </Link>
            <Link
              to="/compradores"
              className="text-gray-600 hover:text-gray-800"
            >
              Compradores
            </Link>
            <Link to="/login" className="text-gray-600 hover:text-gray-800">
              Iniciar Sesión
            </Link>
            <Link to="/register" className="text-gray-600 hover:text-gray-800">
              Registrarse
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500">
          <p>&copy; 2023 RifaApp. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
