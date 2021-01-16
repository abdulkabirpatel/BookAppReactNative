import api from '../../services/api'
import { call, put } from 'redux-saga/effects'

import { Creators as BooksActions } from '../ducks/books'

const query = 'Harry Potter'

export function* getBooks() {
  try {
    const response = yield call(api.get, `${query}&maxResults=15`)
    yield put(BooksActions.getBooksSuccess(response.data.items))
  } catch (error) {
    yield put(BooksActions.getBooksFailure('Erro ao buscar livros da API'))
  }
}
