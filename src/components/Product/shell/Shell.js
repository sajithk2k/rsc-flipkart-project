import React from 'react'
import './Shell.css'

export default function Shell() {
    return (
        <div>
            <div className='back-header'>
                <div>
                    <svg width="19" height="8vh" viewBox="0 0 19 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.556 7.847H1M7.45 1L1 7.877l6.45 6.817" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                    </svg>
                </div>
                <div className='loader'>
                    <div className="lds-ring">
                        <div />
                        <div />
                        <div />
                        <div />
                    </div>
                </div>
            </div>
        </div>
    )
}