import { Code2, Palette, ArrowUpRight } from 'lucide-react'
import './ClubCard.css'

function ClubCard({ name, description, category, type }) {
  const Icon = type === 'technical' ? Code2 : Palette

  return (
    <article className="club-card">
      <div className="club-card-top">
        <div className="club-icon">
          <Icon size={25} strokeWidth={1.5} />
        </div>

        <ArrowUpRight className="club-arrow" size={19} />
      </div>

      <span className="club-category">{category}</span>

      <h3>{name}</h3>

      <p>{description}</p>
    </article>
  )
}

export default ClubCard