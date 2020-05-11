import React, { Component } from 'react';
import MainButton from '../UI/main-button/main-button';
import './Stocks.scss';
import { connect } from 'react-redux';
import isEmpty from '../../utils/const/isEmpty';
import { withRouter } from 'react-router-dom';
import save from '../../store/action/save/save';


class Stock extends Component {

    constructor(props) {
        super(props)
    }

    toBook = () => {
        const { history, id, user, userSave } = this.props;

        if(isEmpty(user)) {
            if(this.checkSubscriptions(user, id)) {
                user.subscriptions.push(id);
            } else {
                const index = user.subscriptions.indexOf(id);
                user.subscriptions.splice(index, 1);
            }

            userSave(user);
            history.push('/subscription');

        } else {
           history.push('/sign-in');
        }
    }

    checkSubscriptions = (user, id) => {
        if(user !== {}) {
           const subscription = user.subscriptions?.find(item => item === id);
           if(subscription !== undefined) {
               return false;
           } 
        }

        return true;
    }

    render() {
        const { header, price, style, user, id } = this.props;
        return (
            <div className='stock' style={style ? style : null}>
                <div className='stock-content'>
                    <h3>
                        {header}
                    </h3>
                    <h2>
                        {price}  
                    </h2>
                    <MainButton
                        type='reservation'
                        className='stock-content-button'
                        styleCss={{
                            marginTop: '100px'
                        }}
                        onClick={() => this.toBook()}
                    >
                        {this.checkSubscriptions(user, id) ? 'Забронировать' : 'Отменить'}
                    </MainButton>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.userSave.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userSave: (user) => dispatch(save(user))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Stock))