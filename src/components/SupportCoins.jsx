import React from 'react'
import Coins from '../assets/AssortCoins.svg'

const SupportCoins = () => {
    return (
        <div data-testid="supportContainer" className=' pt-20 pb-10 bg-primaryLight'>
            <div className=' max-w-5xl mx-auto text-center text-primaryPurple'>
                <h1 data-testid="supportHeading" className='text-4xl font-bold'>Currencies we support right now</h1>
                <img data-testid="supportImg" className='my-14 mx-auto w-[750px]' src={Coins} alt="supportCoins" />
            </div>
        </div>
    )
}

export default SupportCoins