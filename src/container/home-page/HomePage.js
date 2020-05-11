import React, {Component} from 'react';
import Slider from '../../component/Slider/Slider';
import Layout from '../../hoc/Layout/Layout';
import { withFirestore } from 'react-firestore';
import { connect } from 'react-redux';

class HomePage extends Component {

    showSlider(slider, style = {}, index) {
        return (
            <Slider
                className='home-page__slider'
                elements={slider}
                style={style}
                index={index}
            />
        );
    }

    render() {
        const { gym, trainers, subscription } = this.props;
        console.log('HP ', subscription.items.length);
        return (
            <Layout>
                <div className="home-page">
                    {this.showSlider(gym, gym.items.length - 3)}
                    {this.showSlider(trainers, trainers.items.length - 3)}
                    {this.showSlider(subscription, subscription.items.length - 3)}
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

const connectHomePage = connect(mapStateToProps)(withFirestore(HomePage))

export default connectHomePage;