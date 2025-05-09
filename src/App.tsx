import { Routes,Route } from "react-router-dom"
import SteperFormMain from "./pages/steperFormMain"
import NosGaranties from "./pages/nos-garanties"
import Home from "./pages/home"
import  InsuranceOffres  from "./pages/insuranceOffres"
import  ContactForm  from "./pages/contact-form"

export default function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/contact" element={<ContactForm/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/nos-garanties" element={<NosGaranties/>}></Route>
        <Route path="/offre" element={<InsuranceOffres/>}></Route>
        <Route path="/insurance" element={<SteperFormMain/>}></Route>
      </Routes>
    </div>
  )
}