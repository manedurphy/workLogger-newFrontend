import React from 'react';
import Head from './Head';
import Body from './Body';
import Table from '@material-ui/core/Table';
import { TasksTableProps } from '../../types';

const TasksTable: React.FC<TasksTableProps> = ({ tasks, Actions }): JSX.Element => (
    <Table size={'medium'}>
        <Head />
        <Body tasks={tasks} Actions={Actions} />
    </Table>
);

export default TasksTable;
