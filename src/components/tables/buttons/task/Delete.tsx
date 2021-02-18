import React from 'react';
import DeleteButton from '../common/Delete';
import { useDispatch } from 'react-redux';
import { setModal } from '../../../../redux/slices/modals/modalsSlice';
import { IButtonProps } from '../types';

const Delete: React.FC<IButtonProps> = ({ taskId }): JSX.Element => {
    const dispatch = useDispatch();
    const header = 'Are you sure you want to delete?';

    return <DeleteButton handleClick={() => dispatch(setModal({ id: taskId, header, command: 'delete' }))} />;
};

export default Delete;
