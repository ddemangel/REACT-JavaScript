import { useCart } from '../cart/CartContext.jsx'
import CartItem from '../components/CartItem.jsx'
import { Link } from 'react-router-dom'

export default function Cart() {
  const { items, totalItems, totalCost, clearCart } = useCart()

  return (
    <div className="container" style={{paddingTop: '1rem', display: 'grid', gap: '1rem', gridTemplateColumns: '1fr 320px'}}>
      <section>
        <h2>Votre panier</h2>
        {Object.values(items).length === 0 ? (
          <p className="muted">Votre panier est vide. <Link to="/shop">Parcourir les plantes</Link></p>
        ) : (
          Object.values(items).map(entry => (
            <CartItem key={entry.product.id} entry={entry} />
          ))
        )}
      </section>
      <aside className="total-card">
        <h3>Récapitulatif</h3>
        <div className="row"><span>Articles</span><span className="space" /><strong>{totalItems}</strong></div>
        <div className="row"><span>Total</span><span className="space" /><strong>{totalCost.toFixed(2)} €</strong></div>
        <div style={{display:'flex', gap:'.5rem', marginTop:'.75rem'}}>
          <button className="btn" onClick={() => alert('Paiement fictif ✅')}>Payer</button>
          <button className="btn secondary" onClick={clearCart}>Vider</button>
        </div>
        <p className="muted" style={{fontSize:'.85rem'}}>Ajustez les quantités dans la liste à gauche. Le badge du panier se met à jour en temps réel.</p>
      </aside>
    </div>
  )
}
