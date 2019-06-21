import { INCREASE, DECREASE, INCREASE_ASYNC, DECREASE_ASYNC } from './constant';

export const increaseDispatch = () => {
    return { type: INCREASE };
}

export const decreaseDispatch = () => {
    return { type: DECREASE };
}

export const increaseAsyncDispatch = () => {
    return { type: INCREASE_ASYNC }
}

export const decreaseAsyncDispatch = () => {
    return { type: DECREASE_ASYNC }
}