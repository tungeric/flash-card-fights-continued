import { combineReducers } from "redux";
import courses from "./courses_reducer";
import quizAccoutrements from "./quizzes_reducer";
import subjects from "./subject_reducer";
import users from './users_reducer';
import quizzes from "./quizzes_reducer";
import challenges from "./challenges_reducer";
// import challenge from "./challenge_reducer";

export default combineReducers({
  courses, quizAccoutrements, subjects, quizzes, users,
  challenges
});
