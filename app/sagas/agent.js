import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { callAgent } from '../agents/api';

function* spawnAgent() {
  try {
    const user = yield call(callAgent);
    yield put({ type: 'AGENT_LAUNCH_REQUEST_REGISTERED' });
  } catch (e) {
    yield put({ type: 'AGENT_NOT_SPAWNED' });
  }
}

export default function* () {
  yield* takeEvery('AGENT_LAUNCH_REQUEST_SENT', spawnAgent);
}
