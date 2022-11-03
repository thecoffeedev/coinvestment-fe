import React from 'react'

const Footer = () => {
    return (
        <div data-testid="footerContainer" className='bg-primaryLight py-16'>
            <div className='max-w-5xl mx-auto text-center'>
                <h1 data-testid="footerHeading" className='text-3xl font-medium tracking-wide mb-2 text-primaryPurple'>COINVESTMENT</h1>
                <p data-testid="footerPara" className=' text-md pb-2'>Made with ❤️ by Group 17</p>
                <p data-testid="footerPara1" className=' text-sm'>&copy;2022. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer