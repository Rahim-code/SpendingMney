import React from 'react'
import BasketItem from './BasketItem'

export default function Basket({basket,products,total,resetBasket}) {
  return (
    <>
    <div className="basket-container container">
      <h3>Alis veris Detaylari</h3>
   <ul>
   {basket.map(item =>(
    <BasketItem item={item} product={products.find(p=>p.id===item.id)}/>
   ))}
   </ul>
   <div>
    Toplam:${total}
   </div>
  <button onClick={resetBasket}>Sebeti sifirla</button>
    </div>

    <style jsx>{`

      .basket-container{
        padding:20px;
        background:#fff;
        border:1px solid #ddd;
      }
    `}</style>

    </>
  )
}
