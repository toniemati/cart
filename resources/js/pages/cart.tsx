
import { Link, router } from '@inertiajs/react'

import Product, { Product as ProductType } from '@/components/product'
import { Button } from '@/components/ui/button'
import Layout from '@/layouts/layout'

type User = {
    name: string
    email: string
}

export type CartItem = {
    id: number
    cart_id: number
    product_id: number
    quantity: number
    product: ProductType
}

type Cart = {
    id: number
    user_id: number
    user: User
    items: CartItem[]
}

export default function Cart({
    canRegister = true,
    cart
}: {
    canRegister?: boolean
    cart: Cart
}) {
    const order = () => {
        router.post(`cart/${cart.id}/order`, {}, {
            onSuccess: () => {
                alert('Ordered')
            }
        })
    }

    return (
        <Layout title='Cart' canRegister={canRegister}>
            <div className='w-full flex flex-col gap-5 max-w-[600px] mx-auto'>
                {cart.items.length ? (
                    <>
                        <div className='w-full'>
                            <div className='font-bold text-lg'>Your items:</div>
                        </div>

                        <div className='flex flex-col gap-3'>
                            {cart.items.map(item => (
                                <Product product={item.product} item={item} editable key={item.id} />
                            ))}
                        </div>

                        <Button className='ml-auto w-fit cursor-pointer' size='sm' onClick={() => order()}>
                            Order
                        </Button>
                    </>
                ) : (
                    <div className='w-full'>
                        <div className='font-bold text-l text-center'>
                            Your cart is empty
                        </div>
                        <div className='font-bold text-l text-center'>
                            Add something from <Link className='text-blue-400 hover:text-blue-600' href='/shop'>/shop</Link> page
                        </div>
                    </div>
                )}
            </div>

        </Layout>
    )
}
