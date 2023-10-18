import React from 'react'
import './Sidebar.css'

function Sidebar() {
    return (
        <div className='bg-dark'>
            <div className='header'>
                <h1 className='title'>DASHBOARD</h1>
            </div>
            <div className='menu-item'>
                <i className="fa-solid fa-house "></i>
                <p>DASHBOARD</p>
                <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className='menu-item'>
                <i className="fa-brands fa-product-hunt fa-xl"></i>
                <p>PRODUCTS</p>
                <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className='menu-item'>
                <i class="fa-solid fa-user"></i>
                <p>CUSTOMERS</p>
                <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className='menu-item'>
                <i class="fa-solid fa-money-bill"></i>
                <p>ICOMES</p>
                <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className='menu-item'>
                <i className="fa-brands fa-product-hunt fa-xl"></i>
                <p>PROMOTE</p>
                <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className='menu-item'>
                <i class="fa-solid fa-question"></i>
                <p>HELP</p>
                <i className="fa-solid fa-chevron-right"></i>
            </div>
            {/* Add more menu items as needed */}
        </div>
    )
}

export default Sidebar