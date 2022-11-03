import React from 'react'

const BuyCard = (props) => {
    return (
        <div data-testid={props.data_testid} className='test'>
            <img src={props.img} alt="" className='mx-auto' />
            <h1 className='text-center my-8 text-xl'>{props.title}</h1>
        </div>
    )
}

export default BuyCard