import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  authentication: state.authentication,
  loading: state.loading,
  sports: state.scoreData.sports,
});

const mapDispatchToProps = (dispatch) => {
  return {
    register: (data) => dispatch({ type: 'REGISTER_REQUEST', payload: data }),
    login: (data) => dispatch({ type: 'LOGIN_REQUEST', payload: data }),
    resetPassword: (data) => dispatch({ type: 'RESET_PASSWORD_REQUEST', payload: data }),
    finishRegistration: () => dispatch({ type: 'REGISTARTION_FINISHED' }),
    selectSport: (sport) => dispatch({ type: 'SCORE_SELECT_SPORT', payload: sport }),
    unselectSport: (sport) => dispatch({ type: 'SCORE_UNSELECT_SPORT', payload: sport }),
  }
}

export const NewUserContainer = (Component) => connect(mapStateToProps, mapDispatchToProps)(Component);