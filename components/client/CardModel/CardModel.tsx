'use client';

import Image from 'next/image';
import React from 'react'

const CardModel = () => {

    const cartItems = true;

    return (
        <div className='w-max absolute p-4 rounded-md top-12 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20 bg-white right-0 flex flex-col gap-6'>
            {!cartItems ? (
                <div className=''>
                    Cart is empty
                </div>
            ) : (
                <>
                    <h2 className='text-xl'>Shopping cart</h2>
                    <div className="flex flex-col gap-4">
                        {/* ITEMS */}
                        <div className="flex gap-4">
                            <Image src='https://images.pexels.com/photos/30145492/pexels-photo-30145492/free-photo-of-traditional-vietnamese-dress-in-l-ng-s-n.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                                alt=''
                                width={72}
                                height={96}
                                className='object-cover rounded-md' />
                            <div className="flex flex-col justify-between w-full">
                                {/* TOP */}
                                <div className="">
                                    {/* TITLE */}
                                    <div className="flex justify-between items-center gap-8">
                                        <h3 className='font-semibold'>Product name</h3>
                                        <div className="p-1 rounded-sm bg-gray-50">$49</div>
                                    </div>
                                    {/* DESCRIPTION */}
                                    <div className="text-sm text-gray-500">
                                        Avaliable
                                    </div>
                                </div>
                                {/* BOTTOM */}
                                <div className="flex justify-between items-center gap-4 text-sm">
                                    <span className="text-gray-500">Qty. 2</span>
                                    <span className="text-sm text-blue-500">Remove</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Image src='https://images.pexels.com/photos/30145492/pexels-photo-30145492/free-photo-of-traditional-vietnamese-dress-in-l-ng-s-n.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                                alt=''
                                width={72}
                                height={96}
                                className='object-cover rounded-md' />
                            <div className="flex flex-col justify-between w-full">
                                {/* TOP */}
                                <div className="">
                                    {/* TITLE */}
                                    <div className="flex justify-between items-center gap-8">
                                        <h3 className='font-semibold'>Product name</h3>
                                        <div className="p-1 rounded-sm bg-gray-50">$49</div>
                                    </div>
                                    {/* DESCRIPTION */}
                                    <div className="text-sm text-gray-500">
                                        Avaliable
                                    </div>
                                </div>
                                {/* BOTTOM */}
                                <div className="flex justify-between items-center gap-4 text-sm">
                                    <span className="text-gray-500">Qty. 2</span>
                                    <span className="text-sm text-blue-500">Remove</span>
                                </div>
                            </div>
                        </div>


                        {/* END BOTTOM */}
                        <div className="">
                            <div className="flex justify-between items-center gap-4 font-semibold">
                                <span className=''>Subtotal</span>
                                <span className=''>$ 40.5</span>
                            </div>
                            <p className="text-gray-500 text-sm mt-2 mb-4">
                                Shipping and taxes calculated at checkout.
                            </p>
                            {/* BUTTONS */}
                            <div className="flex justify-between items-center">
                                <button className=" ring-1 ring-gray-300 py-3 px-4 rounded-md">View cart</button>
                                <button className=" bg-black text-white py-3 px-4 rounded-md">Checkout</button>
                            </div>
                        </div>
                    </div>
                </>
            )
            }
        </div>
    )
}

export default CardModel