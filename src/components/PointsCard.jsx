import React from 'react'

const PointsCard = (props) => {
    return (
        <div data-testid={props.data_testid} className='p-8'>
            {props.img}
            <h1 className=' font-semibold text-2xl text-center my-4'>{props.title}</h1>
            <p className='text-center text-lg text-gray-500'>{props.para}</p>
        </div>
    )
}

export default PointsCard