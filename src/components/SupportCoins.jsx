import React from 'react'
import Coins from '../assets/AssortCoins.svg'

const SupportCoins = () => {
    return (
        <div className=' pt-20 pb-10 bg-primaryLight'>
            <div className=' max-w-5xl mx-auto text-center text-primaryPurple'>
                <h1 className='text-4xl font-bold'>Currencies we support right now</h1>
                <img className='my-14 mx-auto w-[750px]' src={Coins} alt="" />
            </div>
        </div>
    )
}

export default SupportCoins