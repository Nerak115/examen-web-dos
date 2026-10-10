import Inicio from "../pages/Inicio";

import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import PaginaPendiente from "../pages/PaginaPendiente";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Inicio />,
      },
      {
        path: "catalogo",
        element: <PaginaPendiente titulo="Catálogo" />,
      },
      {
        path: "contacto",
        element: <PaginaPendiente titulo="Contacto" />,
      },
    ],
  },
]);

export default router;

