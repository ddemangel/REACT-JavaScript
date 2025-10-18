import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header.jsx'
import Landing from './pages/Landing.jsx'
import Products from './pages/Products.jsx'
import Cart from './pages/Cart.jsx'

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/shop"
          element={<><Header /><Products /></>}
        />
        <Route
          path="/cart"
          element={<><Header /><Cart /></>}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}
