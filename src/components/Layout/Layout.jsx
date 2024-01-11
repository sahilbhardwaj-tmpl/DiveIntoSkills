import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
function Layout({ children }) {
    return (
        <>
            <div>
                <Header />
                <div style={{
                    minHeight: '100vh',
                    paddingTop: '61px',
                    backgroundColor: '#F3F4D3'
                }}>
                    {children}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Layout