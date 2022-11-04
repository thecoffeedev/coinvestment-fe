import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const Faq = () => {

    const [int, setInt] = useState(<p>Coinvestment is the easiest way to build your investment portfolio by buying bundles of cryptocurrencies with just one click.</p>);

    return (
        <div data-testid="faqContainer" name="faq" className='w-screen h-screen bg-primaryPurple py-16 text-primaryLight'>
            <div className='max-w-7xl h-full mx-auto  p-10 flex'>
                <div className='w-2/4 h-full mr-6'>
                    <h1 data-testid="faqHeading" className=' text-4xl font-light mb-3'>Frequently Asked</h1>
                    <h1 data-testid="faqHeading1" className='text-4xl font-bold mb-10'>Questions</h1>
                    <div className='text-lg space-y-2'>
                        <button data-testid="quest1" onClick={() => { setInt(<p>Coinvestment is the easiest way to build your investment portfolio by buying bundles of cryptocurrencies with just one click.</p>) }} className='flex w-full items-center justify-between focus:opacity-100 pr-6 hover:bg-white hover:bg-opacity-10 focus:bg-white focus:bg-opacity-20 pl-3 rounded opacity-70 hover:opacity-100 cursor-pointer py-3'>
                            <h1>What is Coinvestment?</h1>
                            <div className='border-4 rounded rotate-45'><AiOutlinePlus className='-rotate-45' size={20} /></div>
                        </button>
                        <button data-testid="quest2" onClick={() => { setInt(<p>New users to crypto-currency do not have the experience to predict which tokens will do well, and given the nascency of the industry even experienced investors do not have that insight. We allow you to build a diversified portfolio of currencies based on your risk tolerance or personal preferences with just one click.</p>) }} className='flex w-full text-start items-center justify-between focus:opacity-100 pr-6 hover:bg-white hover:bg-opacity-10 focus:bg-white focus:bg-opacity-20 pl-3 rounded opacity-70 hover:opacity-100 cursor-pointer py-3'>
                            <h1>Why should I buy bundles instead of individual tokens?</h1>
                            <div className='border-4 rounded rotate-45'><AiOutlinePlus className='-rotate-45' size={20} /></div>
                        </button>
                        <button data-testid="quest3" onClick={() => { setInt(<p>With CoinBundle you can invest in different bundles of cryptocurrencies. That helps you to save time on researching as well as diversify your cryptocurrency investment risks.</p>) }} className='flex w-full text-start items-center justify-between focus:opacity-100 pr-6 hover:bg-white hover:bg-opacity-10 focus:bg-white focus:bg-opacity-20 pl-3 rounded opacity-70 hover:opacity-100 cursor-pointer py-3'>
                            <h1>What can I do with Coinvestment?</h1>
                            <div className='border-4 rounded rotate-45'><AiOutlinePlus className='-rotate-45' size={20} /></div>
                        </button>
                        <button data-testid="quest4" onClick={() => { setInt(<p>Connect your credit card or bank account information, answer a few questions about your profile, and select which bundle you want to buy. It only takes few minutes to start.</p>) }} className='flex w-full text-start items-center justify-between focus:opacity-100 pr-6 hover:bg-white hover:bg-opacity-10 focus:bg-white focus:bg-opacity-20 pl-3 rounded opacity-70 hover:opacity-100 cursor-pointer py-3'>
                            <h1>How can I buy cryptocurrencies on Coinvestment?</h1>
                            <div className='border-4 rounded rotate-45'><AiOutlinePlus className='-rotate-45' size={20} /></div>
                        </button>
                        <button data-testid="quest5" onClick={() => { setInt(<p>We are partnering with a custody provider to safely secure our assets. CoinBundle provides best in class security in partnership with Kingdom Holdings, so that you can invest your assets with peace of mind.</p>) }} className='flex w-full text-start items-center justify-between focus:opacity-100 pr-6 hover:bg-white hover:bg-opacity-10 focus:bg-white focus:bg-opacity-20 pl-3 rounded opacity-70 hover:opacity-100 cursor-pointer py-3'>
                            <h1>How will you store user's assets securely?</h1>
                            <div className='border-4 rounded rotate-45'><AiOutlinePlus className='-rotate-45' size={20} /></div>
                        </button>
                        <button data-testid="quest6" onClick={() => { setInt(<p>Our core team members have over 50 years of experience working with non-traditional financial instruments and complex regulatory environments.</p>) }} className='flex w-full text-start items-center justify-between focus:opacity-100 pr-6 hover:bg-white hover:bg-opacity-10 focus:bg-white focus:bg-opacity-20 pl-3 rounded opacity-70 hover:opacity-100 cursor-pointer py-3'>
                            <h1>How is the team qualified to build this product?</h1>
                            <div className='border-4 rounded rotate-45'><AiOutlinePlus className='-rotate-45' size={20} /></div>
                        </button>
                        <button data-testid="quest7" onClick={() => { setInt(<p>We are backed by the top investors in Silicon Valley including Initialized Capital, Tuesday Capital and YCombinator.</p>) }} className='flex w-full text-start items-center justify-between focus:opacity-100 pr-6 hover:bg-white hover:bg-opacity-10 focus:bg-white focus:bg-opacity-20 pl-3 rounded opacity-70 hover:opacity-100 cursor-pointer py-3'>
                            <h1>Who are the early investors and backers of Coinvestment?</h1>
                            <div className='border-4 rounded rotate-45'><AiOutlinePlus className='-rotate-45' size={20} /></div>
                        </button>
                    </div>
                </div>
                <div className='w-2/4 text-lg py-32 px-12 border-l-2 border-opacity-30 '>
                    {int}
                </div>
            </div>
        </div>
    )
}

export default Faq