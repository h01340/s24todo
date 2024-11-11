import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
    <h6>My Todos</h6>
    {/* html5 nav element */}
      <nav>
        {/* Path definitions :
        //The path property is a path pattern. 
        When it matches to current URL, the element will be rendered.*/}
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