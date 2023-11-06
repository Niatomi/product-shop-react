import { useState } from 'react'
import { IProduct } from '../models'
import { Rating } from './Rating'

interface ProductProps {
  product: IProduct
}

export function Product(props: Readonly<ProductProps>) {
  let [details, setDetails] = useState(false)

  return (
    <div className="flex flex-col flex-nowrap justify-between gap-2 h-full p-5 bg-white rounded text-slate-800 text-center ">
      <img
        src={ props.product.image }
        className='object-contain h-52'/>
      <div className=' font-sans text-left text-lg'>
        <button
          className='font-semibold hover:underline hover:decoration-none hover:cursor-pointer text-left'
          onClick={ () => setDetails(prev => !prev) }>
          { props.product.title }
        </button>
        { details && <p>{ props.product.description }</p> }
        <p className='text-slate-600 text-sm'>{ props.product.category }</p>
      </div>
      <div className="flex flex-row justify-between">
        <div className="text-left text-slate-500">
          <Rating rating={ props.product.rating.rate }/>
          <p>{ props.product.rating.count } rates</p>
        </div>
        <p className='font-bold'>{ props.product.price } $</p>
      </div>
      <button className='btn-primary border'>Add to Cart</button>
    </div>
  )
}
