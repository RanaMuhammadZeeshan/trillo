import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="container">
        <Header />
        <div className="content">
          <Sidebar />
          <main className="hotel-view">{children}</main>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Layout
