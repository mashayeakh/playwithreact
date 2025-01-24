import React from 'react'

const Navigation = () => {
    return (
        <div>
            <nav className='container'>
                <div className='logo'>
                    <img
                        src="/images/brand_logo.png"
                        alt="logo" srcset="" />
                </div>
                <ul>
                    <li href="#">manu</li>
                    <li href="#">location</li>
                    <li href="#">about</li>
                    <li href="#">contact</li>
                </ul>
                <button className='loginBtn'>
                    login
                </button>
            </nav>
        </div>
    )
}

export default Navigation