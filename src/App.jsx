import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { useEffect, useState } from 'react'
import Loader from './components/Loader'

function App() {


  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2300)
  }, [])


  return (
    <section>

      <Routes>
        <Route path='/' element={loading ? (<Loader />) : (<Home />)} />
      </Routes>

    </section>
  )
}

export default App
