import React, { Component } from 'react';
import Layout from '../../hoc/Layout/Layout';
import MySelect from '../../component/UI/Select/Select';
import { connect } from 'react-redux';
import { times, daysWeek } from '../timetable/timeTable.const';
import './MyTimeTable.scss';

class MyTimeTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indexSelect : [],
            findIndicesCard: []
        }
    }

    showSelect = (objectData, index) => {
        return (
            <MySelect
                type={objectData.type}
                header={objectData.header}
                dataOptions={objectData.items}
                changeSelect={this.changeSelect}
                index={index}
            />
        )
    }

    changeSelect = (event, index) => {   
         
    }
    
    render() {
        const { trainer } = this.props;

        return (
            <Layout>
                <div className='my-time-table'>
                    <div className='my-time-table__content'>
                        <h3>Узнайте когда у вас запланировано занятие</h3>
                        <div className='my-time-table__content__select-panel'>
                            {this.showSelect(trainer, 1)}
                            {this.showSelect({type: 'string', header: 'Время', items: times}, 2)}
                            {this.showSelect({type: 'string', header: 'Дни недели', items: daysWeek}, 3)}
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

const mapStateToProps = state => {
    return {
        trainer: state.trainers.trainers,
        user: state.userSave.user
    }
}

const ConnectMyTimeTable = connect(mapStateToProps)(MyTimeTable);

export default ConnectMyTimeTable;