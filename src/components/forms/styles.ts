import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

export default makeStyles((theme: Theme) => {
    return {
        form: {
            padding: '5px 20px',
        },
        paper: {
            position: 'relative',
            zIndex: theme.zIndex.drawer + 5,
            marginTop: '12px',
        },
        title: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '0.35rem',
        },
        submit: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '5px',
        },
        update: {
            marginRight: '5px',
        },
        del: {
            marginLeft: '5px',
            backgroundColor: '#b60000',
            color: '#ffffff',

            '&:hover': {
                backgroundColor: '#b60000',
            },
        },
    };
});
