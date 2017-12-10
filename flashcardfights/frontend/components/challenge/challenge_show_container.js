import { connect } from "react-redux";
import ChallengeShow from "./challenge_show";
import {
  getChallenge,
  getChallenges,
  updateChallenge,
  deleteChallenge,
  createChallenge
} from "../../actions/challenge_actions";
import { selectChallenge } from "../../reducers/selectors";

const mapStateToProps = (state, { match }) => {
   const challengeId = parseInt(match.params.challengeId);
   const challenge = selectChallenge(state.entities, match.params.challengeId);
  //  const currentUser = state.session.currentUser;
  return {
    challengeId: challengeId,
    challenge: challenge,
    // challenges: state.entities.challenges
    // currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchChallenge: id => dispatch(getChallenge(id)),
  updateChallenge: challenge => dispatch(updateChallenge(challenge)),
  deleteChallenge: id => deleteChallenge(id),
  createChallenge: challenge => createChallenge(challenge)
});

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeShow);