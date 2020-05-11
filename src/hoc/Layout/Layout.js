import React from 'react';
import './Layout.scss';
import Header from '../../component/Header/Header';

const Layout = props => {
    
    return (
        <div className='layout'>
            <Header />
            <main>{props.children}</main>
        </div>
    )
}

export default Layout;