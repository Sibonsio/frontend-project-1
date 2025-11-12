import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Form from './components/Form.jsx'
import All from './pages/All.jsx'
import Card from './components/Card.jsx'
import Employed from './pages/Employed.jsx'
import Unemployed from './pages/Unemployed'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/all" element={<All />} />
        <Route path="/employed" element={<Employed />} />
        <Route path="/unemployed" element={<Unemployed />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
