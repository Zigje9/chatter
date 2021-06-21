import {all} from 'redux-saga/effects'
import user from './user'

export default function* () {
  yield all(
    [...user]
  )
}