import { FormEvent, useState } from 'react'

import Product, { Product as ProductType } from '@/components/product'
import { Input } from '@/components/ui/input'
import Layout from '@/layouts/layout'


export default function Shop({
    canRegister = true,
    products = []
}: {
    canRegister?: boolean
    products: ProductType[]
}) {

    const [filteredProducts, setFilteredProducts] = useState(products)

    const filter = (e: FormEvent<HTMLInputElement>) => {
        const { target: { value } } = e as { target: { value?: string } }

        const newProducts = products.filter(p => p.name.match(new RegExp(value ?? '', 'gmi')))

        setFilteredProducts(newProducts)
    }

    return (
        <Layout title='Shop' canRegister={canRegister}>
            <div className='w-full flex flex-col gap-5 max-w-[600px] mx-auto'>
                <div className='w-full'>
                    <Input className='border-white' placeholder='Search products' onInput={filter} />
                </div>

                <div className='flex flex-col gap-3'>
                    {filteredProducts.map(product => (
                        <Product product={product} key={product.id} />
                    ))}
                </div>
            </div>
        </Layout>
    )
}
