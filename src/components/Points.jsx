import React from 'react'
import { BsPiggyBank, BsShieldLock } from 'react-icons/bs'
import { BiLock } from 'react-icons/bi'
import PointsCard from './PointsCard'


const Points = () => {
    return (
        <div className='max-w-6xl py-16 px-4 mx-auto text-gray-700'>
            <div className='grid grid-cols-3'>
                <PointsCard data_testid="Point1" img={<BsPiggyBank size='5em' color='#5050ff' className=' mx-auto' />} title='Save Money' para='Invest and grow your savings up to 20% faster by avoiding service fees. Only pay 3.5% transaction fees on credit/debit card deposits and zero fees on crypto deposits.' />
                <PointsCard data_testid="Point2" img={<BiLock size="4.5em" color='#5050ff' className=' mx-auto' />} title='Bundles you can trust
' para='Our team of crypto and finance experts analyzes the market for you to carefully construct bundles with the right coins that match your investment preferences.' />
                <PointsCard data_testid="Point3" img={<BsShieldLock size="4em" color='#5050ff' className=' mx-auto' />} title='Funds protected and insured' para='Funds are stored securely and insured against theft with Kingdom Trust, the global leader in alternative asset custody.' />
            </div>
        </div>
    )
}

export default Points