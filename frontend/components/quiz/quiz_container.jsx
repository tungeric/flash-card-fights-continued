import {connect} from 'react-redux';
import Quiz from './quiz';
import { getQuiz } from '../../actions/quiz_actions';
import { createQuestionAttempt } from '../../actions/question_attempt_actions';
import { createQuizAttempt } from '../../actions/quiz_attempt_actions';
import { updateChallenge } from '../../actions/challenge_actions';

const mapStateToProps = (state, ownProps) => {
  return{
    quiz: state.entities.quizAccoutrements.quizzes,
    currentUser: state.session.currentUser.id
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchQuiz: id => dispatch(getQuiz(id)),
  createQuestionAttempt: question => dispatch(createQuestionAttempt(question)),
  createQuizAttempt: quiz=> dispatch(createQuizAttempt(quiz)),
  updateChallenge: challenge => dispatch(updateChallenge)
});

export default connect(mapStateToProps,mapDispatchToProps)(Quiz);
