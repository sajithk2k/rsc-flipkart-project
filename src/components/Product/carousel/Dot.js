import React from 'react'

export default function Dot({ active }) {
    // console.log('active : ', active)
    return (
        <span className='dot'
            style={{
                background: `${active ? 'black' : 'white'}`
            }}
        />
    )
}