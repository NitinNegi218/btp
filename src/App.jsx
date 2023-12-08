import Navbar from "./Navbar"
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Home from "./Home"
import { React } from "react"
import "./App.css"
function App() {
  return(
    <BrowserRouter>
    <div style={{width: "100vw",
                height: "100vh",
                backgroundColor: 
                "#eeeeee"}}
            >
       <Navbar/>
       
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="/nav" element={<Navbar/>}>
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
  )
}
export default App
