import React from 'react'
import BuyCard from './BuyCard'
import account from '../assets/account.svg'
import verified from '../assets/verified.svg'
import BuyMe from '../assets/card-or-crypto.svg'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const Buy = () => {
    const navigate = useNavigate()
    return (
        <div className='py-16 bg-primaryPurple text-primaryLight'>
            <div className=' mx-auto max-w-6xl'>
                <h1 className='font-bold text-4xl text-white mt-6 mb-20 text-center'>Buy your first Coin bundle with these simple steps</h1>
                <div className='grid grid-cols-3'>
                    <BuyCard title='Create your acoount' img={account} />
                    <BuyCard title='Get verified' img={verified} />
                    <BuyCard title='Buy bundles using your credit/debit card' img={BuyMe} />
                </div>
                <div className='text-center p-4'>
                    <Button onCLick={() => { navigate("/db/crypto") }} text='Start Investing' color='bg-[#008CFF]' />
                </div>
            </div>
        </div>
    )
}

export default Buy