import { all, call, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import { LiveScoreService } from '@ddd/livescore-core';

function* loadEventsBySportId(sport: {id: number }) {
  yield console.log('@loadEventsBySportId', sport)
  const response = yield LiveScoreService.getEventsLiveBySportId(sport.id);
  return { sport, sportId: sport.id, events: response.data };
}

/**
 * Получить список live событий по массиву id спортов
 */

function* loadEventsBySportIds(sports: []) {
  const result = yield all(sports.map((sport) => call(loadEventsBySportId, sport)));
  return result;
}

export function* loadSportTypesSaga() {
  try {
    const sports = yield LiveScoreService.getSports();
    yield put({ type: "SCORE_SPORT_SUCCESS", payload: { sports: sports.data ?? [] } });
  } catch (e) {
    console.error('@loadSportTypesSaga', e);
    yield put({ type: "SCORE_TEAMS_FAILURE", payload: { error: e.message } });
  }
}

function* loadEventsBySportIdAndDate(sport: {id: number }, date) {
  const response = yield LiveScoreService.getEventsBySportIdAndDate(sport.id, date);
  return { sport, sportId: sport.id, events: response.data };
}


function* loadEventsBySportIdsAndDate(sports: [], date: string) {
  const result = yield all(sports.map((sport) => call(loadEventsBySportIdAndDate, sport, date)));
  return result;
}

export function* loadEventsForSelectedSportByDate(action) {
  try {
    const state = yield select((state) => state.scoreData);

    // if (state.events[action.payload.date]?.length > 0) {
    //   return;
    // }

    const date = action.payload?.date || (new Date()).toISOString().split('T')[0];

    const selectedSports = state.sports.filter((sport) => sport.selected);
    yield console.log('@loadEventsForSelectedSportByDate', selectedSports.map((sport) => sport.id));
    const response = yield loadEventsBySportIdsAndDate(selectedSports, date);
    yield console.log({ response });
    yield put({ type: "SCORE_LOAD_EVENTS_FOR_A_DATE_SUCCESS", payload: { events: { [date]: response } } });
  } catch (e) {
    console.error(e);
    yield put({ type: "SCORE_LOAD_EVENTS_FOR_A_DATE_FAILURE", payload: { error: e.message } });
  }
}

export function* loadLiveEventsForSelectedSport(action) {
  try {
    yield put({ type: "LOADING_REQUEST" });
    const state = yield select((state) => state.scoreData);
    const selectedSports = state.sports.filter((sport) => sport.selected);
    yield console.log(selectedSports.map((sport) => sport.id));
    const response = yield loadEventsBySportIds(selectedSports);
    yield put({ type: "SCORE_LIVE_DATA_SUCCESS", payload: { live: response } });

    yield put({ type: "SCORE_LOAD_EVENTS_FOR_A_DATE_REQUEST" });
  } catch (e) {
    console.error(e);
    yield put({ type: "SCORE_LIVE_DATA_FAILURE", payload: { error: e.message } });
  }
}

export default function* rootSaga() {
  yield takeEvery('SCORE_SELECT_SPORT_REQUEST', loadSportTypesSaga);
  yield takeEvery('SCORE_SELECT_SPORT', loadLiveEventsForSelectedSport);
  yield takeLatest('SCORE_LOAD_EVENTS_FOR_A_DATE_REQUEST', loadEventsForSelectedSportByDate);
  yield takeLatest('persist/REHYDRATE', loadLiveEventsForSelectedSport);
}