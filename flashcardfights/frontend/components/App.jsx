import React from 'react';
import { Provider } from 'react-redux';
import { Link, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/authorization_util';
import SessionFormContainer from './session_form/session_form_container';
import HeaderContainer from './header/header_container';
import GreetingContainer from './greeting/greeting_container';
import DashboardContainer from './dashboard/dashboard_container';
import QuizContainer from './quiz/quiz_container';
import CourseContainer from './course_page/course_page_container';
import ChallengeIndexContainer from './challenge/challenge_index_container';


const App = () => {
  return (
    <div>
      <HeaderContainer />
      <Switch>
        <AuthRoute exact path="/" component={GreetingContainer} />
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <ProtectedRoute path="/dashboard" component={DashboardContainer} />
        <ProtectedRoute path="/challenges" component={ChallengeIndexContainer} />

        <ProtectedRoute path="/quiz/:quiz_id" component={QuizContainer} />
        <ProtectedRoute path="/course/:course_id" component={CourseContainer} />
      </Switch>
    </div>
  );
};

export default App;
