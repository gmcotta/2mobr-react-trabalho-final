import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Home, TeamMember } from "../pages";
import { teamMembers } from "../content/TeamMembers";

const routes = [
    <Route path="/" element={<Home />} />,
    <Route path="/gustavo-matias" element={<TeamMember memberInfo={teamMembers[0]} />} />,
    <Route path="/nayara-felix" element={<TeamMember memberInfo={teamMembers[1]} />} />,
    <Route path="/vinicius-lima" element={<TeamMember memberInfo={teamMembers[2]} />} />,
    <Route path="/yuri-cunha" element={<TeamMember memberInfo={teamMembers[3]} />} />,
    <Route path="*" element={<h1>Not found</h1>} />,
]

const router = createBrowserRouter(
    createRoutesFromElements(routes)
  );
  
  function Router() {
    return <RouterProvider router={router} />;
  }
  
  export { Router };