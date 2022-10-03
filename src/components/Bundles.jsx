import React from 'react'
import Bundle from './Bundle'

const Bundles = () => {
    return (
        <div className='w-full h-screen bg-[#E6E6E6] py-10'>
            <div className=' max-w-5xl w-full mx-auto text-start'>
                <div>
                    <h1 className=' text-[2.7rem] leading-tight font-bold text-[#5050ff]'>Bundles let you invest in dozens<br /> of the right cryptocurrencies<br /> with one click.</h1>
                    <p className=' text-gray-800 mt-4 mb-10 font-normal opacity-60'>Each bundle is carefully crafted by experts to match your investment<br /> needs and preferences, whether its your risk profile<br /> or your beliefs.</p>
                </div>
                <div className='grid grid-cols-3 gap-4'>
                    <Bundle />
                    <Bundle />
                    <Bundle />
                </div>
            </div>
        </div>
    )
}

export default Bundles