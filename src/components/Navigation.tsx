import { Link } from 'react-router-dom'
import { CartIcon } from '../assets/CartIcon'

export function Navigation() {
  return (
    <div className="flex flex-row flex-wrap justify-between min-w-full items-center content-baseline bg-emerald-900 p-5 text-xl align-middle text-slate-100">
      <Link to="/">FStore</Link>
      <Link to="/about">About</Link>
      <div className="rounded bg-white p-2 hover:bg-slate-800 hover:cursor-pointer hover:fill-white transition ease-in-out ">
        <CartIcon/>
      </div>
    </div>
  )
}