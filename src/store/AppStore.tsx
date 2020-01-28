import {createStore} from 'redux';
import rootReducer from './reducers'
import TicketDto from '../models/TicketDto'

export interface IAppState {
    tickets: TicketDto[],
}

const INITIAL_STATE: IAppState = {
    tickets: []
}

const appStore = createStore(
    rootReducer,
    INITIAL_STATE as any,
    ((window) as any).devToolsExtension &&
    ((window) as any).devToolsExtension());
export { appStore };