import Navbar from "./Components/Navbar"
import Contact from "./Components/Contact"
import Home from "./Components/Home"
import About from "./Components/About"
import { Route, Routes } from "react-router-dom"
import "./App.css"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/1" element={<Contact/>} />
          <Route path="/2" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App
