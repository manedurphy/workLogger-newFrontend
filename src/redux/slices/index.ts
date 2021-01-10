import { combineReducers } from '@reduxjs/toolkit';
import CounterReducer from './counter';
import taskReducer from './tasks/tasksSlice';
import userReducer from './users/usersSlice';
import alertsReducer from './alerts/alertsSlice';
import authReducer from './auth/authSlice';

export default combineReducers({
    counter: CounterReducer,
    auth: authReducer,
    alerts: alertsReducer,
    tasks: taskReducer,
    user: userReducer,
});
