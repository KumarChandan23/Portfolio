
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { Routing } from './components/Routing/Routing';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Ensures JavaScript features like Carousel work

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routing />
    </BrowserRouter>
  )
}

export default App
