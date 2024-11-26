import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Comprador {
  id: number;
  nombre: string;
  boleta: number;
  avatar: string;
}

const compradores: Comprador[] = [
  {
    id: 1,
    nombre: "Ana García",
    boleta: 23,
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    nombre: "Carlos Rodríguez",
    boleta: 45,
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    nombre: "María López",
    boleta: 67,
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    nombre: "Juan Martínez",
    boleta: 89,
    avatar: "https://i.pravatar.cc/150?img=4",
  },
];

export default function CompradoresPage() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Compradores de Boletas</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {compradores.map((comprador) => (
            <Card key={comprador.id}>
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar>
                  <AvatarImage src={comprador.avatar} alt={comprador.nombre} />
                  <AvatarFallback>
                    <User />
                  </AvatarFallback>
                </Avatar>
                <CardTitle>{comprador.nombre}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Boleta: #{comprador.boleta}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
