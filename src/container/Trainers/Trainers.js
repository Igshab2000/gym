import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../../hoc/Layout/Layout';
import SpringModal from '../../component/ModalWindow/ModalWindow';
import './Trainers.scss';

class Trainers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isShow: false
        }
    }

    showInformationAboutTrainer = (item) => {
        return (
            <SpringModal
                isCheck={this.state.isShow}
            >
                <div className="trainer-content">
                    <div 
                        style={{
                            width: 300,
                            height: 300,
                            background: 'url('+item.src +')',
                            backgroundSize: 'cover',
                            marginLeft: 10,
                            marginTop: 10
                        }}
                    />
                    <div class='trainer-content__information'>
                        <h2>{item.name}</h2>
                        <h6>{item.information}</h6>
                    </div>
                </div>
            </SpringModal>
        )
    }

    showPhotoTrainers = () => {
        const { trainers } = this.props;
        console.log(trainers);
        return trainers.items.map((item, index) => {
            return (
                <div
                    data-title={item?.name}
                    key={index}
                    className='slider__content__item'
                    onClick={ () => {
                        this.setState({
                            isShow: !this.state.isShow
                        })
                    }}
                    style={{
                        width: 300,
                        height: 300,
                        backgroundImage: 'url('+item.src +')',
                        backgroundSize: 'cover'
                    }}
                />
            )
        })
    }

    render() {
        return(
            <Layout>
                <div className='trainers-container'>
                    <h2>Тренерский состав</h2>
                    <div className='trainers-container__galary'>
                        {this.showPhotoTrainers()}
                    </div>
                </div>
            </Layout>
        )
    }
}

const mapStateToProps = state => {
    return {
        trainers: state.trainers.trainers
    }
}

export default connect(mapStateToProps)(Trainers);