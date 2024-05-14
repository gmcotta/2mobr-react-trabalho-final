import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Home } from "../pages";

const routes = [
    <Route path="/" element={<Home />} />,
    <Route path="/gustavo-matias" element={<h1>Gustavo Matias</h1>} />,
    <Route path="/nayara-pereira" element={<h1>Nayara Pereira</h1>} />,
    <Route path="/vinicius-lima" element={<h1>Vinicius Lima</h1>} />,
    <Route path="/yuri-cunha" element={<h1>Yuri Cunha</h1>} />,
    <Route path="*" element={<h1>Not found</h1>} />,
]

const router = createBrowserRouter(
    createRoutesFromElements(routes)
  );
  
  function Router() {
    return <RouterProvider router={router} />;
  }
  
  export { Router };