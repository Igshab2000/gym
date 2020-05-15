import React, {Component} from 'react';
import Layout from '../../hoc/Layout/Layout';
import { withFirestore } from 'react-firestore';
import { connect } from 'react-redux';
import SimpleSlider from '../../component/CustomPaging/CustomPaging';
import {Link} from 'react-router-dom';
import './HomePage.scss';

class HomePage extends Component {

    showSlider(slider, count, style, dots, element, href) {
        return (
            <SimpleSlider
                objectItem={slider} 
                slidesToShow={count}
                style={style}
                dots={dots}
                element={element}
                href={href}
                showWindow={this.confirmationWindow}
            />
        );
    }

    showHeader = (item) => {
        return (
            <header className='home-page__header'>
                <h1>{item.header}</h1>
                <Link
                    className='home-page__header-link'
                    to={item.href}
                >
                    {item.header}
                </Link>
            </header>
        )
    }

    checkModal = () => {
        this.setState({
            isCheckModal: !this.state.isCheckModal
        })
    }

    render() {
        const { gym, trainers, subscription } = this.props;
        const style = {
            height: 350,
            width: 300
        }
        return (
            <Layout>
                <div className="home-page">
                    <div className="home-page__custom-slider">
                        {this.showHeader(gym)}
                        {this.showSlider(gym.items, 3, style, false, 'div', gym.href)}
                    </div>
                    
                    <div className="home-page__custom-slider">
                        {this.showHeader(subscription)}
                        {this.showSlider(subscription.items, 3, {}, false, 'Stocks', subscription.href)}
                    </div>

                    <div className="home-page__custom-slider">
                        {this.showHeader(trainers)}
                        {this.showSlider(trainers.items, 3, style, false, 'div', trainers.href)}
                    </div>
                </div>
            </Layout>
        )
    }
}

const mapStateToProps = state => {
    return {
        gym: state.gym.gym,
        trainers: state.trainers.trainers,
        subscription: state.subscription.subscriotion
    }
}

const connectHomePage = connect(mapStateToProps)(withFirestore(HomePage));

export default connectHomePage;