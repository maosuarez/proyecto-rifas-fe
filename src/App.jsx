import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TicketsPage from "./app/tickets";
import CompradoresPage from "./app/costumers";
import LoginPage from "./app/auth/login";
import RegisterPage from "./app/auth/register";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <TicketsPage />,
    },
    {
      path: "/compradores",
      element: <CompradoresPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
  ],
  {
    future: {
      v7_startTransition: true, // Habilita la funcionalidad futura para transiciones
    },
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
