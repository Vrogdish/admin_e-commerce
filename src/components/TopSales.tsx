import React from 'react'
import Card from './Card'

export default function TopSales() {
  return (
    <Card title='Dernière commande' link='/sales'>
        <p>Commande n° xxxx </p>
        <p>Status : en cours</p>
    </Card>
  )
}
