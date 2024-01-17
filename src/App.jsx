import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { useEffect, useState } from 'react'
import Loader from './components/Loader'
import Buffet from './pages/Buffet'
import Galeria from './pages/Galeria'

function App() {


  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])



  return (
    <section>

      <Routes>
        <Route path='/' element={loading ? (<Loader />) : (<Home />)} />
        <Route path='/buffet/:id' element={(<Buffet />)} />
        <Route path='/galeria' element={(<Galeria />)} />
      </Routes>

    </section>
  )
}

export default App
