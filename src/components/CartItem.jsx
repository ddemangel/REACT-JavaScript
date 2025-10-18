import { useCart } from '../cart/CartContext.jsx'

export default function CartItem({ entry }) {
  const { increment, decrement, remove } = useCart()
  const { product, qty } = entry
  const subTotal = product.price * qty

  return (
    <article className="card" style={{display:'grid', gridTemplateColumns:'120px 1fr auto', gap:'1rem', alignItems:'center'}}>
      <img className="thumb" src={product.image} alt={product.name} style={{aspectRatio:'1/1'}}/>
      <div>
        <div className="row" style={{justifyContent:'space-between'}}>
          <strong>{product.name}</strong>
          <span className="price">{product.price.toFixed(2)} €</span>
        </div>
        <p className="muted" style={{marginTop:'.25rem'}}>{product.description}</p>
        <div className="row" style={{marginTop:'.5rem'}}>
          <div className="qty">
            <button aria-label="Diminuer" onClick={() => decrement(product.id)}>-</button>
            <strong>{qty}</strong>
            <button aria-label="Augmenter" onClick={() => increment(product.id)}>+</button>
          </div>
          <button className="btn secondary" onClick={() => remove(product.id)}>Supprimer</button>
        </div>
      </div>
      <div style={{justifySelf:'end'}}><strong>{subTotal.toFixed(2)} €</strong></div>
    </article>
  )
}
