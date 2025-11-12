import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Form from './components/Form.jsx'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/form" element={<Form />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
