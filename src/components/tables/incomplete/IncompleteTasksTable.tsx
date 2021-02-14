import React, { Fragment } from 'react';
import IncompleteTaskActions from './IncompleteTaskActions';
import useIncompleteTasksTableStyles from './styles';
import TasksTable from '../tasksTable/TasksTable';
import { Box } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getTasksState, setShowCreateNewTaskForm } from '../../../redux/slices/tasks/tasksSlice';

const IncompleteTasksTable = (): JSX.Element => {
    const dispatch = useDispatch();
    const { add } = useIncompleteTasksTableStyles();
    const { incompletedTasks } = useSelector(getTasksState);

    return (
        <Fragment>
            <TasksTable tasks={incompletedTasks} Actions={IncompleteTaskActions} />
            <Box display={'flex'} justifyContent={'flex-end'}>
                <AddCircle className={add} onClick={() => dispatch(setShowCreateNewTaskForm(true))} />
            </Box>
        </Fragment>
    );
};

export default IncompleteTasksTable;
