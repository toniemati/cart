
import Layout from '@/layouts/layout'

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean
}) {
    return (
        <Layout title='Welcome' canRegister={canRegister}>
            <div className="max-w-[400px] ml-auto flex-1 rounded-br-lg rounded-bl-lg bg-white p-6 pb-12 text-[13px] leading-[20px] shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:rounded-tl-lg lg:rounded-br-none lg:p-20 dark:bg-[#161615] dark:text-[#EDEDEC] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
                <h1 className="mb-1 font-medium">
                    Shopping cart
                </h1>

                <p className="mb-2 text-[#706f6c] dark:text-[#A1A09A]">
                    Browse products and add to your cart
                </p>

                <ul className="mb-4 flex flex-col lg:mb-6">
                    <li className="relative flex items-center gap-4 py-2 before:absolute before:top-1/2 before:bottom-0 before:left-[0.4rem] before:border-l before:border-[#e3e3e0] dark:before:border-[#3E3E3A]">
                        <span className="relative bg-white py-1 dark:bg-[#161615]">
                            <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-[#e3e3e0] bg-[#FDFDFC] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.03),0px_1px_2px_0px_rgba(0,0,0,0.06)] dark:border-[#3E3E3A] dark:bg-[#161615]">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#dbdbd7] dark:bg-[#3E3E3A]" />
                            </span>
                        </span>

                        <span>
                            Go to <a
                                href="/shop"
                                target="_blank"
                                className="ml-1 inline-flex items-center space-x-1 font-medium text-[#f53003] underline underline-offset-4 dark:text-[#FF4433]"
                            >
                                <span>Shop</span>

                                <svg
                                    width={10}
                                    height={11}
                                    viewBox="0 0 10 11"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-2.5 w-2.5"
                                >
                                    <path
                                        d="M7.70833 6.95834V2.79167H3.54167M2.5 8L7.5 3.00001"
                                        stroke="currentColor"
                                        strokeLinecap="square"
                                    />
                                </svg>
                            </a> to browse all products
                        </span>
                    </li>

                    <li className="relative flex items-center gap-4 py-2 before:absolute before:top-0 before:bottom-1/2 before:left-[0.4rem] before:border-l before:border-[#e3e3e0] dark:before:border-[#3E3E3A]">
                        <span className="relative bg-white py-1 dark:bg-[#161615]">
                            <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-[#e3e3e0] bg-[#FDFDFC] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.03),0px_1px_2px_0px_rgba(0,0,0,0.06)] dark:border-[#3E3E3A] dark:bg-[#161615]">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#dbdbd7] dark:bg-[#3E3E3A]" />
                            </span>
                        </span>

                        <span>
                            Go to <a
                                href="/cart"
                                target="_blank"
                                className="ml-1 inline-flex items-center space-x-1 font-medium text-[#f53003] underline underline-offset-4 dark:text-[#FF4433]"
                            >
                                <span>Cart</span>

                                <svg
                                    width={10}
                                    height={11}
                                    viewBox="0 0 10 11"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-2.5 w-2.5"
                                >
                                    <path
                                        d="M7.70833 6.95834V2.79167H3.54167M2.5 8L7.5 3.00001"
                                        stroke="currentColor"
                                        strokeLinecap="square"
                                    />
                                </svg>
                            </a> to browse your cart
                        </span>
                    </li>
                </ul>
            </div>

            <div className="mr-auto relative -mb-px aspect-[335/376] w-full shrink-0 overflow-hidden rounded-t-lg bg-[#fff2f2] lg:mb-0 lg:-ml-px lg:aspect-auto lg:w-[438px] lg:rounded-t-none lg:rounded-r-lg dark:bg-[#1D0002]">
                <img src="https://t4.ftcdn.net/jpg/14/64/22/71/360_F_1464227120_NAaeukTQE6JKY98w5xmjvAtW4vQa4DSJ.jpg"
                    alt="cart" width="100%" height="100%" />
            </div>
        </Layout>
    )
}
