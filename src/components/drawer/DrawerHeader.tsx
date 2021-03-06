import React from 'react';
import useDrawerStyles from './drawerStyles';

const DrawerHeader = (): JSX.Element => {
    const classes = useDrawerStyles();
    return (
        <div className={classes.header}>
            <h2>Work Logger</h2>
            <img
                src={'https://work-logger-connor.s3.amazonaws.com/work-logger-logo-min.png'}
                alt={'logo'}
                width={60.3}
                height={40}
            />
        </div>
    );
};

export default DrawerHeader;
