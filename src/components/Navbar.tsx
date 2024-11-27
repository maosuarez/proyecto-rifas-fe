import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const token = sessionStorage.getItem("token");

  // Estado para almacenar el path actual
  const [currentPath, setCurrentPath] = useState<string>(location.pathname);

  useEffect(() => {
    // Actualizar el path cuando cambie `location.pathname`
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-xl font-bold text-gray-800">
            BoletasApp
          </Link>
          <div className="space-x-4">
            {currentPath === "/" ? (
              <Link to="/compradores">
                <Button variant="ghost">Compradores</Button>
              </Link>
            ) : (
              <Link to="/">
                <Button variant="ghost">Boletas</Button>
              </Link>
            )}
            {token ? (
              <Link to="/perfil">
                <Button variant="outline">Perfil</Button>
              </Link>
            ) : (
              <div>
                <Link to="/login">
                  <Button variant="outline">Iniciar Sesión</Button>
                </Link>
                <Link to="/register">
                  <Button>Registrarse</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
