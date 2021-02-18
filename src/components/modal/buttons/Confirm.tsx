import React from 'react';
import useButtonStyles from '../styles';
import { Button } from '@material-ui/core';
import { getModalState } from '../../../redux/slices/modals/modalsSlice';
import { ConfirmButtonProps } from '../types';
import { useDispatch, useSelector } from 'react-redux';

const Confirm: React.FC<ConfirmButtonProps> = ({ action }): JSX.Element => {
    const dispatch = useDispatch();
    const { id, command } = useSelector(getModalState);
    const { completeBtn, delBtn } = useButtonStyles();
    return (
        <Button
            variant={'contained'}
            className={command === 'complete' ? completeBtn : delBtn}
            onClick={() => dispatch(action(id))}
        >
            Yes, {command}
        </Button>
    );
};

export default Confirm;
