
import Layout from '@/layouts/layout'


export default function Cart({
    canRegister = true,
}: {
    canRegister?: boolean
}) {
    return (
        <Layout title='Cart' canRegister={canRegister}>
            cart
        </Layout>
    )
}
