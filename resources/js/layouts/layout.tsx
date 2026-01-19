import { Head, Link, usePage } from '@inertiajs/react'
import { LayoutDashboard, ShoppingCart, Store } from 'lucide-react'
import { PropsWithChildren, useEffect } from 'react'

import { useCart } from '@/contexts/CartContext'
import { cart, dashboard, login, register, shop } from '@/routes'
import { type SharedData } from '@/types'

type LayoutProps = {
    title: string
    canRegister?: boolean
} & PropsWithChildren

export default function Layout({ children, title, canRegister }: LayoutProps) {
    const { auth } = usePage<SharedData>().props
    const { cartItemsCount, fetchCartItemsCount } = useCart()

    useEffect(() => {
        fetchCartItemsCount()
    })

    return (
        <>
            <Head title={title}>
                <link rel="preconnect" href="https://fonts.bunny.net" />

                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>

            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-5 text-[#1b1b18] lg:p-8 dark:bg-[#0a0a0a]">
                <header className="mb-6 w-full max-w-[400px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <nav className="flex items-center justify-end gap-4">
                        {auth.user ? (
                            <>
                                <Link
                                    href={shop()}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    <Store />
                                </Link>

                                <Link
                                    href={cart()}
                                    className="relative inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    <ShoppingCart />

                                    {cartItemsCount ? (
                                        <div className='absolute right-[-10%] top-[-25%] inline-flex items-center justify-center rounded-full bg-red-500 px-1 py-0.5 text-xs font-bold text-white'>
                                            {cartItemsCount}
                                        </div>
                                    ) : null}
                                </Link>

                                <Link
                                    href={dashboard()}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    <LayoutDashboard />
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    href={login()}
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                >
                                    Log in
                                </Link>

                                {canRegister && (
                                    <Link
                                        href={register()}
                                        className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                    >
                                        Register
                                    </Link>
                                )}
                            </>
                        )}
                    </nav>
                </header>

                <div className="flex w-full justify-center">
                    <main className="flex w-full flex-col-reverse lg:flex-row dark:text-[#EDEDEC]">
                        {children}
                    </main>
                </div>
            </div>
        </>
    )
}
