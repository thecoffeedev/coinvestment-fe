import React from 'react'
import alpha from '../assets/icons8-alpha-32 (1).png'
import btc from '../assets/btc.png'
import eth from '../assets/eth.png'


const Bundle = () => {
    const myCoins = ['btc', 'eth'];
    return (
        <div className='bg-[#6A64FB] rounded-lg text-white p-4'>
            <div className='flex items-center gap-3 px-2 rounded-lg bg-[#584EFB] mb-4'>
                <img src={alpha} className='w-11' alt="" />
                <h1 className='font-semibold text-xl'>Alpha Bundle</h1>
            </div>
            <CoinImg myCoins={myCoins} />
        </div>
    )
}

const CoinImg = (props) => {
    const myCoins = props.myCoins;
    const coins = myCoins.map((coin) =>
        <img src={coin} alt={coin} className='w-7' />
    );
    return (

        <div className='px-2 flex'>
            {coins}
        </div>
    )
}

export default Bundle