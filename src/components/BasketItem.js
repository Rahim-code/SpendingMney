import React from 'react'

export default function BasketItem({item,product}) {
  return (
    <li>
    {product.title} x {item.amount}
    </li>
  )
}
