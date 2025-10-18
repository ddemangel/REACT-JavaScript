import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <section className="hero">
      <div className="hero-card">
        <h1>Paradise Nursery</h1>
        <p>Découvrez notre sélection de plantes d’intérieur : purificatrices d’air, aromatiques et faciles d’entretien.
           Embellissez votre espace et respirez mieux.</p>
        <Link to="/shop"><button className="btn">Commencer</button></Link>
      </div>
    </section>
  )
}
