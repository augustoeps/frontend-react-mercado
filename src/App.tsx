import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/dashboard.tsx";
import Producto from "./Pages/product.tsx"

function App() {


  return (

      <Router>
          <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<Producto />} />
          </Routes>
      </Router>




      //<>
      //  <Dashboard/>



      //</>
  )
}

export default App
