import { router } from '@inertiajs/react'
import { Minus, Plus, Trash } from 'lucide-react'
import { useState } from 'react'

import { useCart } from '@/contexts/CartContext'
import { CartItem } from '@/pages/cart'

import { Button } from './ui/button'
import { Input } from './ui/input'

export type Product = {
    id: number
    name: string
    price: number
    stock_quantity: number
    in_cart: boolean
}

export default function Product({ product, editable, item }: { product: Product, editable?: boolean, item?: CartItem }) {
    const [inCart, setInCart] = useState(product.in_cart)
    const { fetchCartItemsCount } = useCart()

    let quantity = item?.quantity ?? 0


    const addToCart = (productId: number) => {
        router.post(`cart/add/${productId}`, {}, {
            onSuccess: () => {
                setInCart(true)
                fetchCartItemsCount()
                alert('Product added to your cart')
            }
        })
    }

    const req = (newQuantity: number) => {
        router.post(`cart/${product.id}/update`, {
            quantity: newQuantity
        }, {
            onSuccess: () => {
                if (newQuantity <= 0) {
                    alert('Product remove from your cart')
                    setInCart(false)
                }

                quantity = newQuantity
            }
        })
    }

    return (
        <div
            className='flex gap-2'
            key={product.id}
        >
            <div className='min-w-[200px] h-[200px]'>
                <img
                    className='w-full h-full rounded'
                    src='https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='
                    alt='img'
                />
            </div>

            <div className='w-full flex flex-col gap-2'>
                <div className='text-lg font-bold'>{product.name}</div>

                <div>${product.price}</div>

                <div>Available: {product.stock_quantity}</div>

                <div className='flex gap-2 items-center'>

                    {inCart ? (
                        <Button
                            className='text-red-500 font-bold border-red-500 border w-fit px-2 py-1 rounded cursor-pointer bg-0 hover:bg-0'
                            size='sm'
                            onClick={() => req(0)}
                        >
                            <Trash />
                        </Button>
                    ) : null}
                    {editable ? (
                        <>
                            <Button className='cursor-pointer' size='sm' onClick={() => req(quantity - 1)}>
                                <Minus />
                            </Button>

                            <Input className='w-[50px] border-white' value={quantity} onChange={(e) => req(parseInt(e.target.value))} />

                            <Button className='cursor-pointer' size='sm' onClick={() => req(quantity + 1)}>
                                <Plus />
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button
                                className='text-green-500 font-bold border-green-500 border w-fit px-2 py-1 rounded cursor-pointer bg-0 hover:bg-0'
                                onClick={() => addToCart(product.id)}
                                disabled={inCart || product.stock_quantity <= 0}
                            >
                                {inCart ? 'In cart' : 'Buy'}
                            </Button>

                        </>
                    )}
                </div>

            </div>
        </div>
    )
}
