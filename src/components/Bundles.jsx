import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const Bundles = () => {
    const navigate = useNavigate()
    return (
        <div name="bundles" className='w-full bg-[#E6E6E6] py-16 px-4'>
            <div className=' max-w-6xl h-full w-full mx-auto text-center '>
                <div className='justify-center'>
                    <h1 data-testid="bundlesHeadline" className=' text-[2.7rem] leading-tight font-bold text-[#5050ff]'>Bundles let you invest in dozens<br /> of the right cryptocurrencies<br /> with one click.</h1>
                    <p data-testid="bundlesPara" className=' text-gray-800 mt-4 mb-10 font-normal opacity-60'>Each bundle is carefully crafted by experts to match your investment<br /> needs and preferences, whether its your risk profile<br /> or your beliefs.</p>
                    <div data-testid="bundlesButton" className='test'>
                        <Button onClick={() => navigate("/db/bundles")} text='Get Started' color='bg-[#5050ff]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bundles