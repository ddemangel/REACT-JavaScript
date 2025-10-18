import products from '../data/plants.js'
import ProductCard from '../components/ProductCard.jsx'

export default function Products() {
  // Regrouper par catégorie
  const groups = products.reduce((acc, p) => {
    acc[p.category] ||= []
    acc[p.category].push(p)
    return acc
  }, {})

  return (
    <main className="container" style={{paddingTop: '1rem'}}>
      {Object.entries(groups).map(([cat, items]) => (
        <section key={cat} style={{marginBottom: '1.2rem'}}>
          <h2 style={{marginBottom: '.5rem'}}>{cat}</h2>
          <div className="grid">
            {items.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      ))}
    </main>
  )
}
