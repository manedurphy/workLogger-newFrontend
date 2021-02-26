import React from 'react';
import Title from './Title';
import useMainStyles from '../mainStyles';
import RefreshIcon from '@material-ui/icons/Refresh';
import IncompleteTasksTable from '../../tables/tasksTable/incomplete/IncompleteTasksTable';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Fade from '@material-ui/core/Fade';
import { handleGetIncompleteTasks } from '../../../redux/slices/tasks/tasksSlice';
import { useDispatch } from 'react-redux';

const IncompleteTasks = (): JSX.Element => {
    const dispatch = useDispatch();
    const { paper, header } = useMainStyles();
    return (
        <Fade in={true} timeout={500} unmountOnExit>
            <Paper className={paper}>
                <Box className={header}>
                    <Title>Incomplete Tasks</Title>
                    <IconButton size={'small'} onClick={() => dispatch(handleGetIncompleteTasks())}>
                        <RefreshIcon />
                    </IconButton>
                </Box>
                <IncompleteTasksTable />
            </Paper>
        </Fade>
    );
};

export default IncompleteTasks;
