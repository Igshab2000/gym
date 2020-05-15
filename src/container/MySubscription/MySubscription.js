import React, { Component } from 'react';
import Layout from '../../hoc/Layout/Layout';
import { connect } from 'react-redux';
import { fire } from '../../index';
import { withFirestore } from 'react-firestore';
import Stocks from '../../component/Stocks/Stocks';
import './MySubscription.scss';


class MySubscription extends Component {

    showMySubscribers = () => {
        const { subscription, user } = this.props;
        return user.subscriptions.map((item, index) => {
           return (
                <Stocks
                    key={index}
                    header={subscription.items[item].header}
                    price={subscription.items[item].price}
                    id={subscription.items[item].id}
                    type='big'
                    style={{
                        marginLeft: '30px',
                        marginTop: '15px',
                        opacity: 1
                    }}
                />
           )
        })
    }

    render () {
        const { subscriptions } = this.props.user;
        return (
            <Layout>
                <div className='my-subscription'>
                    <div className='my-subscription__list'>
                        {subscriptions.length > 0 ? 
                            <h2>Список моих абонементов</h2>
                            :
                            <h2>У вас нет абонементов</h2>
                        }
                        <div className='my-subscription__list-subscribers'>
                            {this.showMySubscribers()}
                        </div>  
                    </div>
                </div>
            </Layout>
        )
    }

    componentDidMount = () => {
        const { user } = this.props;
        fire.firestore().collection("users").doc(user.login).update({
            subscriptions: user.subscriptions
        });
    }

}

const mapStateToProps = state => {
    
    return {
        user: state.userSave.user,
        subscription: state.subscription.subscriotion
    }
}



export default connect(mapStateToProps)(withFirestore(MySubscription));