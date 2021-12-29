import { fork } from 'redux-saga/effects'
import userSaga from './User'
export default function* mySaga(){
    yield fork(userSaga)
}