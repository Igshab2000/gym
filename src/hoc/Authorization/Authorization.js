import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MainButton from '../../component/UI/main-button/main-button';
import './Authorization.scss';

class Authorization extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='authorization-container'>
                <div className='authorization-container__button'> 
                        <Link
                            to='/'
                        >
                            <MainButton
                                type='main'
                                
                            >
                            На главную 
                            </MainButton>
                        </Link>
                    </div>
                <header className='authorization-container__header'> 
                    <h1>Логотип</h1>
                </header>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Authorization;