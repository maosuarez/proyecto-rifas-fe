import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-xl font-bold text-gray-800">
            RifaApp
          </Link>
          <div className="space-x-4">
            <Link to="/">
              <Button variant="ghost">Tickets</Button>
            </Link>
            <Link to="/compradores">
              <Button variant="ghost">Compradores</Button>
            </Link>
            <Link to="/login">
              <Button variant="outline">Iniciar Sesión</Button>
            </Link>
            <Link to="/register">
              <Button>Registrarse</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
