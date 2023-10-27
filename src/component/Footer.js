import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <footer className='px-5 mt-5' style={{ borderTop: '2px solid var(--text-color)' }}>
            <div className='py-4 d-flex align-items-center justify-content-center'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div>
                    <i class="fa-brands fa-linkedin mx-3 fs-5"></i>
                </div>
                <div>
                    <i class="fa-brands fa-square-github fs-5"></i>
                </div>
            </div>
        </footer>
    )
}
