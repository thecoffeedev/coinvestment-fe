import React from 'react'
import macImg from '../assets/MacCoins.png'
import Button from '../components/Button.jsx'
import { useNavigate } from 'react-router-dom'

const Info = () => {
    const navigate = useNavigate()
    return (
        <div name="info" className='w-full h-screen px-10 bg-primaryPurple py-10 text-white'>
            <div className='flex h-full max-w-6xl mx-auto'>
                <div className='w-2/4 h-full'>
                    <div className='flex justify-center items-center h-full px-8'>
                        <img data-testid="infoImg" className='' src={macImg} alt="mac" />
                    </div>
                </div>
                <div className='my-auto px-4 w-2/4 '>
                    <h1 data-testid="infoHeadline" className='text-4xl font-bold'>Investing has never been so easy.</h1>
                    <div className='text-xl py-4 font-light text-primaryLight'>
                        <p data-testid="infoPara" className='mb-8'>Coinvestment is built to match the needs of investors at all levels of expertise.</p>
                        <ul className='space-y-4 list-disc px-6'>
                            <li data-testid="infoPoint1">The simplest and most user friendly interface in the industry</li>
                            <li data-testid="infoPoint2">A variety of payment methods including credit/debit cards and individual cryptocurrencies</li>
                            <li data-testid="infoPoint3">Free and secure custody of funds in partnership with Kingdom Trust</li>
                            <li data-testid="infoPoint4">A range of investment options to choose from according to personal preferences</li>
                        </ul>
                        <div data-testid="infoButton" className='flex py-10 ml-6'>
                            <Button onClick={() => { navigate("/db/crypto") }} text='Get Started' color='bg-[#008CFF]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info