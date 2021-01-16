import { createStore, applyMiddleware,createEnhancer } from 'redux'
import createSagaMiddleware from 'redux-saga'

import sagas from './sagas'
import reducers from './ducks'

const sagaMiddleware = createSagaMiddleware()

const middleware = [
  sagaMiddleware,
]

const createAppropriateStore = __DEV__ ? console.tron.createStore : createEnhancer()
const store = createAppropriateStore(reducers, applyMiddleware(...middleware))

sagaMiddleware.run(sagas)

export default store
