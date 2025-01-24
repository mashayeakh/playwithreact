import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />  {/* this outlet replaces with home, contact us and others.. mainly dynamically change. */}
            <Footer />
        </>
    )
}

export default Layout