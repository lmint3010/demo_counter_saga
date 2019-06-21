import test from 'tape';

import { put, call } from 'redux-saga/effects';
import { increaseAsync, delay } from './rootSaga';

test('increaseAsync Saga test', (assert) => {
    const gen = increaseAsync();

    assert.deepEqual(
        gen.next().value,
        call(delay, 1000)
    )

    assert.deepEqual(
        gen.next().value,
        put({ type: 'INCREASE' })
    )

    assert.deepEqual(
        gen.next(),
        { done: true, value: undefined }
    )

    assert.end();
})