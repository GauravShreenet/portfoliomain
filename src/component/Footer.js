import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <footer className='px-5 mt-5' style={{ borderTop: '2px solid var(--text-color)' }}>
            <div className='py-4 d-flex align-items-center justify-content-center'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div>
                    <a href='https://www.linkedin.com/in/gaurav-shreenet-7408081b6/'><i class="fa-brands fa-linkedin mx-3 fs-5" style={{color: 'var(--text-color)'}}></i></a>
                </div>
                <div>
                <a href='https://github.com/GauravShreenet'><i class="fa-brands fa-square-github fs-5" style={{color: 'var(--text-color)'}}></i></a>
                </div>
            </div>
        </footer>
    )
}
