/* eslint-disable react/prop-types */
import React from 'react';
import EditButton from '../../buttons/task/Edit';
import DeleteButton from '../../buttons/task/Delete';
import CompleteButton from '../../buttons/task/Complete';
import LogButton from '../../buttons/task/Log';
import useTasksTableStyles from '../styles';
import { Box } from '@material-ui/core';
import { TaskActionsProps } from '../../types';

const IncompleteTaskActions: React.FC<TaskActionsProps> = ({ task }): JSX.Element => {
    const { flexSpace } = useTasksTableStyles();
    return (
        <Box className={flexSpace}>
            <EditButton task={task} />
            <DeleteButton taskId={task.id} />
            <CompleteButton taskId={task.id} />
            <LogButton log={task.Logs} />
        </Box>
    );
};

export default IncompleteTaskActions;
