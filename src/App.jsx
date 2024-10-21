import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
    {/* html5 nav element */}
      <nav>
        {/* Path definitions */}
        <Link to={"/"}>Home</Link>
        <Link to={"/todos"}>Todos</Link>
        <Link to={"/kontakti"}>Contact</Link>
      </nav>
      {/* Placeholder where component will be rendered */}
      <Outlet />
    </>
  );
}

export default App;