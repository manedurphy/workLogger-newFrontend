import React from 'react';
import CompleteTasks from './components/CompleteTasks';
import Log from './components/LogComponent';
import NewTaskForm from '../forms/task/NewTaskForm';
import useMainStyles from './mainStyles';
import { Container } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { getTasksState } from '../../redux/slices/tasks/tasksSlice';
import { getLogState } from '../../redux/slices/log/logSlice';

const MainComplete = (): JSX.Element => {
    const { container } = useMainStyles();
    const { showCreateTaskForm } = useSelector(getTasksState);
    const { showLog } = useSelector(getLogState);
    return (
        <Container maxWidth={'lg'} className={container}>
            {!showLog ? <CompleteTasks /> : <Log />}
            {showCreateTaskForm && <NewTaskForm />}
        </Container>
    );
};

export default MainComplete;