import React from 'react'
import Header from './Header';
import Footer from './Footer';
function Layout({ children }) {
    return (
        <>
            <div>
                <Header />
                <div style={{
                    minHeight: '100vh',
                    paddingTop: '60px',
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
