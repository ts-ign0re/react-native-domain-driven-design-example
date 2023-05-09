import { takeLatest, put } from 'redux-saga/effects';

export function* loginSaga(action) {
  yield console.log('loginSaga');

  yield put({ type: 'LOGIN_SUCCESS', payload: {
    token: '82528bcbfbmsh913306452a78b7cp1bc0b8jsn1392c6b1c068',
    user: {
      username: action.payload.username,
      email: action.payload.email,
      password: action.payload.password,
    }
  } });
}

export function* registerSaga(action) {
  yield put({ type: 'REGISTER_SUCCESS', payload: {
    token: '82528bcbfbmsh913306452a78b7cp1bc0b8jsn1392c6b1c068',
    user: {
      username: action.payload.username,
      email: action.payload.email,
      password: action.payload.password,
    }
  } });

  yield put({ type: 'SCORE_SELECT_SPORT_REQUEST' });
}

export default function* rootSaga() {
  yield takeLatest('LOGIN_REQUEST', loginSaga);
  yield takeLatest('REGISTER_REQUEST', registerSaga);
}