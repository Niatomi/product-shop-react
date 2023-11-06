import { useContext } from 'react'
import { CartIcon } from '../assets/CartIcon'
import { ErrorMsg } from '../components/ErrorMsg'
import { Loader } from '../components/Loader'
import { Product } from '../components/Product'
import { CreateProduct } from '../components/forms/CreateProduct'
import { useProducts } from '../service/ProductService'
import { ModalContext } from '../context/ModalContext'
import { Modal } from '../components/Modal'
import { Navigation } from '../components/Navigation'

export function ProductPage() {
  const { loading, products, error } = useProducts()
  const { modal, open, close } = useContext(ModalContext)

  return (
    <div className="min-h-screen h-auto font-serif text-slate-200 bg-emerald-800 pb-5 flex flex-nowrap flex-col  items-center">
      <div className="container sm max-w-7xl grid auto-rows-max gap-5 ">
        { loading && <Loader /> }
        { error && <ErrorMsg error={ error } /> }
        {
          products.map(product => (
            <Product
              product={ product }
              key={ product.id }/>
          ))
        }
      </div>
      { modal &&
        <Modal
          title='Create new product'
          onClick={ () => close() }
        >
          <CreateProduct onCreate={ () => close() }/>
        </Modal> }
    </div>
  )
}