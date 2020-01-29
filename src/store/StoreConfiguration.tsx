import {createStore} from 'redux';
import rootReducer from './reducers'
import TicketDto from '../models/TicketDto'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export interface IAppState {
    tickets: TicketDto[],
}

const INITIAL_STATE: IAppState = {
    tickets: []
}
const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
    let store = createStore(
        persistedReducer,
        INITIAL_STATE as any,
        ((window) as any).devToolsExtension &&
        ((window) as any).devToolsExtension())
    let persistor = persistStore(store)
    return {store, persistor}
}