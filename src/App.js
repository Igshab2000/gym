import React, { Component } from 'react';
import HomePage from './container/home-page/HomePage';
import Subscription from './container/subscription/subscription';
import Timetable from './container/timetable/timetable';
import MyTimeTable from './container/MyTimeTable/MyTimeTable';
import { Switch, Route } from 'react-router-dom';
import SignIn from './container/signIn/signIn';
import SignUp from './container/signUp/signUp';
import { connect } from 'react-redux';
import isEmpty from './utils/const/isEmpty';
import UserEdit from './container/UserEdit/UserEdit';
import GymGalary from './container/GymGalary/GymGalary';


class App extends Component {

  constructor(props) {
    super(props);
  }

  available = () => {
    return (
      <Switch>
        <Route path="/subscription" component={Subscription}/>
        <Route path="/gym-galary" component={GymGalary}/>
        <Route path="/timetable" component={Timetable}/>
        <Route path="/" component={HomePage}/>
      </Switch>
    )
  }

  showRoute = () => {
    const { user } = this.props;
    if(isEmpty(user)) {
      return (
        <Switch>
          <Route path="/my-timetable" component={MyTimeTable}/>
          <Route path="/user-edit" component={UserEdit}/>
          {this.available()}
          <Route path="/" component={HomePage}/>
        </Switch>
      )
    } else {
      return (
        <Switch>
          <Route path="/sign-up" component={SignUp}/>
          <Route path="/sign-in" component={SignIn}/>
          {this.available()}
          <Route path="/" component={HomePage}/>
        </Switch>
      )
    }
  }

  render() {
    return (
      this.showRoute()
    );
  }
}

const mapStateToProps = (state) => {
  return {
      user: state.userSave.user
  }
}

export default connect(mapStateToProps)(App);
