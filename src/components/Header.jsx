import { Link } from 'react-router-dom'
import { useCart } from '../cart/CartContext.jsx'

export default function Header() {
  const { totalItems } = useCart()
  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/shop" className="brand" aria-label="Retour à la liste produits">
          <img src="/logo.svg" alt="logo paradise nursery" />
          <div>
            <div>Paradise Nursery</div>
            <div className="slogan">Plantes d’intérieur bien-être</div>
          </div>
        </Link>
        <Link to="/cart" className="cart-link" aria-label="Ouvrir le panier">
          🧺 Panier
          <span className="cart-badge">{totalItems}</span>
        </Link>
      </div>
    </header>
  )
}
