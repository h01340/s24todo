// import { Link, Outlet } from 'react-router-dom';

// function App() {
//   return (
//     <>
//     <h6>My Todos</h6>
//     {/* html5 nav element */}
//       <nav>
//         {/* Path definitions :
//         //The path property is a path pattern. 
//         When it matches to current URL, the element will be rendered.*/}
//         <Link to={"/"}>Home</Link>
//         <Link to={"/todos"}>Todos</Link>
//         <Link to={"/kontakti"}>Contact</Link>
//       </nav>
//       {/* Placeholder where component will be rendered */}
//       <Outlet />
//     </>
//   );
// }

// export default App;
import './App.css'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import MyTabs from './components/MyTabs';

function App() {


  return (
    <>
      <Container maxWidth="xl" >
        <CssBaseline />
        {/*
       <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              My Todos
            </Typography>
          </Toolbar>
        </AppBar> 
  */}
        <MyTabs />

      </Container>

    </>
  )
}

export default App
