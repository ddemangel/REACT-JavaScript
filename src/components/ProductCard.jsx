import { useCart } from '../cart/CartContext.jsx'

export default function ProductCard({ product }) {
  const { addToCart, hasProduct } = useCart()
  const inCart = hasProduct(product.id)
  return (
    <article className="card">
      <img className="thumb" src={product.image} alt={product.name} />
      <div className="row" style={{justifyContent:'space-between'}}>
        <strong>{product.name}</strong>
        <span className="price">{product.price.toFixed(2)} €</span>
      </div>
      <p className="muted" style={{minHeight:'3rem'}}>{product.description}</p>
      <button className="btn" onClick={() => addToCart(product)} disabled={inCart}>
        {inCart ? 'Ajouté au panier' : 'Ajouter au panier'}
      </button>
    </article>
  )
}
