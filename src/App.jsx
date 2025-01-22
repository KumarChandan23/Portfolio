
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { Routing } from './components/Routing/Routing';
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap/dist/js/bootstrap.bundle";
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS + Popper.js


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routing />
    </BrowserRouter>
  )
}

export default App
