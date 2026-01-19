import axios from 'axios'
import { useCallback, useState } from 'react'

export function useCartCount() {
    const [cartItemsCount, setCartItemsCount] = useState(0)

    const fetchCartItemsCount = useCallback(async () => {
        try {
            const { data } = await axios.get('cart/items/count')

            setCartItemsCount(data.count)
        } catch (error) {
            console.error('Error fetching cart items count:', error)
        }
    }, [])

    return { cartItemsCount, setCartItemsCount, fetchCartItemsCount }
}
