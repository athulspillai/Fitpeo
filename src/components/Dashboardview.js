import React from 'react'
import logo from '../assets/images/01   pp.jpg'
import './Dashboardview.css'

function Dashboardview() {

    return (
        <div>
            <div class='flex items-center justify-end rounded-5 mx-4'>
                <input
                    type='text'
                    class='bg-#F8F9FC h-40 outline-none pl-13 w-350 rounded-5 placeholder-text-14 leading-20 font-normal'
                    placeholder='Search For.....'
                />
                <div class='flex items center gap-15 relative'>
                    <div class='flex items-center gap-15'>
                        <div>
                            <img src={logo} alt='' class='logo' />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Dashboardview