
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { Routing } from './components/Routing/Routing';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routing />
    </BrowserRouter>
  )
}

export default App
