import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ticket } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface TicketProps {
  number: number;
  status: "available" | "selected" | "sold";
}

const TicketItem = ({ number, status }: TicketProps) => {
  const bgColor =
    status === "available"
      ? "bg-green-100"
      : status === "selected"
      ? "bg-green-500"
      : "bg-red-500";
  const textColor = status === "available" ? "text-green-800" : "text-white";

  return (
    <Card
      className={`${bgColor} cursor-pointer transition-all hover:scale-105`}
    >
      <CardContent className="flex items-center justify-center p-4">
        <Ticket className={`${textColor} mr-2`} />
        <span className={`${textColor} font-bold`}>
          {number < 10 ? "0" + number : number}
        </span>
      </CardContent>
    </Card>
  );
};

export default function TicketsPage() {
  const [tickets, setTickets] = useState<TicketProps[]>(
    Array.from({ length: 100 }, (_, i) => ({
      number: i,
      status: "available",
    }))
  );

  const handleTicketClick = (index: number) => {
    setTickets((prev) =>
      prev.map((ticket, i) =>
        i === index
          ? {
              ...ticket,
              status: ticket.status === "selected" ? "available" : "selected",
            }
          : ticket
      )
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-6">Selecciona tus Tickets</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-4">
            {tickets.map((ticket, index) => (
              <div key={ticket.number} onClick={() => handleTicketClick(index)}>
                <TicketItem {...ticket} />
              </div>
            ))}
          </div>
          <Button className="mt-6">Comprar Tickets Seleccionados</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
