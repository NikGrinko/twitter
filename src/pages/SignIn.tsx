import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        margin: '0 auto',
        color: 'red',
        textAlign: 'center'
    }
}))


function SignIn() {

    const classes = useStyles();
    return (
        <>
            <div className={classes.wrapper}>Sign in</div>
        </>
    );
}

export default SignIn;
