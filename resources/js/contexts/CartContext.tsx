import { PropsWithChildren, createContext, useContext } from 'react'

import { useCartCount } from '@/hooks/useCartCount'

type CartContextType = {
    cartItemsCount: number
    setCartItemsCount: (count: number) => void
    fetchCartItemsCount: () => Promise<void>
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: PropsWithChildren) {
    const { cartItemsCount, setCartItemsCount, fetchCartItemsCount } = useCartCount()

    return (
        <CartContext.Provider value={{ cartItemsCount, setCartItemsCount, fetchCartItemsCount }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('useCart must be used within CartProvider')
    }
    return context
}
