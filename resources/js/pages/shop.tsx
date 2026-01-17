
import Layout from '@/layouts/layout'


export default function Shop({
    canRegister = true,
}: {
    canRegister?: boolean
}) {
    return (
        <Layout title='Shop' canRegister={canRegister}>
            shop
        </Layout>
    )
}
