import { uniqBy } from "lodash";

const initialState = {
  live: [],
  sports: [],
  teams: [],
  events: {},
}

export function scoreData(state = initialState, action) {
  switch (action.type) {
    case 'SCORE_SELECT_SPORT_REQUEST':
      return state;

    case 'SCORE_LIVE_DATA_SUCCESS': {
      return { ...state, live: action.payload.live };
    }

    case 'SCORE_LOAD_EVENTS_FOR_A_DATE_SUCCESS': {
      return { ...state, events: Object.assign({}, state.events, action.payload.events) };
    }

    case 'SCORE_SPORT_SUCCESS':
      return { ...state, sports: action.payload.sports };

    case 'SCORE_TEAMS_FAILURE':
      return { ...state, error: action.payload.teams };

    case 'SCORE_SELECT_SPORT': {
      console.warn('SCORE_SELECT_SPORT', action.payload.id);
      return {
        ...state,
        sports: uniqBy(state.sports.map((sport) => ({ ...sport, selected: sport.id === action.payload.id ? !sport.selected : sport.selected })), 'id'),
      }
    }

    case 'SCORE_UNSELECT_SPORT': {
      return {
        ...state,
        sports: uniqBy(state.sports.map((sport) => ({ ...sport, selected: sport.id === action.payload.id ? !sport.selected : sport.selected })), 'id'),
        teams: uniqBy(state.sports.filter(item => item.sportId !== action.payload.id), 'id'),
        live: state.live.filter(event => event.sportId !== action.payload.id),
        events: Object.keys(state.events).reduce((acc, key) => {
          acc[key] = state.events[key].filter(event => event.sport.id !== action.payload.id);
          return acc;
        }, {}),
      }
    }
    default:
      return state;
  }
}