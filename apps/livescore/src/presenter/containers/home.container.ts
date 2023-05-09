import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  authentication: state.authentication,
  loading: state.loading,
  sports: state.scoreData.sports,
  live: state.scoreData.live,
  events: state.scoreData.events,
});

const mapDispatchToProps = (dispatch) => {
  return {
    selectSport: (sport) => dispatch({ type: 'SCORE_SELECT_SPORT', payload: sport }),
    requestLiveEvents: () => dispatch({ type: 'SCORE_LIVE_DATA_REQUEST' }),
  }
}

export const HomeContainer = (Component) => connect(mapStateToProps, mapDispatchToProps)(Component);