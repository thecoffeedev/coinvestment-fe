import React from 'react'
import Button from './Button'

const Bundles = () => {
    return (
        <div className='w-full bg-[#E6E6E6] py-16 px-4'>
            <div className=' max-w-6xl h-full w-full mx-auto text-start flex'>
                <div className='w-[60%] justify-center'>
                    <h1 className=' text-[2.7rem] leading-tight font-bold text-[#5050ff]'>Bundles let you invest in dozens<br /> of the right cryptocurrencies<br /> with one click.</h1>
                    <p className=' text-gray-800 mt-4 mb-10 font-normal opacity-60'>Each bundle is carefully crafted by experts to match your investment<br /> needs and preferences, whether its your risk profile<br /> or your beliefs.</p>
                    <Button text='Conservative' color='bg-[#5050ff]' />
                </div>
                <div className=''>
                </div>
            </div>
        </div>
    )
}

export default Bundles