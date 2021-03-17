import React from 'react'
import Card from './Card'
import './Card.css'

export default function cards() {
  return (
    <div className="cards">
      <Card name="Eren Yeager" src="https://cdnb.artstation.com/p/assets/images/images/033/268/113/large/edmerc-d-mercadal-eren-v5.jpg?1609001111" decription="Branch: Survey Corps"></Card>
      <Card name="Mikasa Ackerman" src="https://s4.anilist.co/file/anilistcdn/character/large/b40881-F3gr1PkreDvj.png" decription="Branch: Survey Corps"></Card>
      <Card name="Armin Arlert" src="https://cdna.artstation.com/p/assets/images/images/029/429/060/large/sirius-dreamer-2020-08-15-11-50-02.jpg?1597514929" decription="Branch: Survey Corps"></Card>
    </div>
  )
}
