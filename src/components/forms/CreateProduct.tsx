import { ChangeEvent, FormEvent, useState } from 'react'

interface CreateProductProps {
  onCreate: () => void
}

export function CreateProduct({ onCreate }: Readonly<CreateProductProps>) {
  const [productName, setProductName] = useState<string>('1')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    console.log('Your product is ' + productName)
    onCreate()
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setProductName(event.target.value)
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input
        type="text"
        className="border py-2 px-4 mb-2"
        placeholder="Enter product name..."
        onChange={ handleChange }
        value={ productName }
      />
      <button
        className="py-2 px-4 border bg-lime-200"
        type="submit">Create Product</button>
    </form>

  )
}