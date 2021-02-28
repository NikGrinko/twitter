import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, Typography } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { Enter } from '../components/modalWindow/Enter';
import { Register } from '../components/modalWindow/Register';
const TWITTER_BLUE = '#1DA1F2';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: 'calc(100vh - 84px)',
    },
    blueSide: {
        background: 'rgba(29,161,242,0.7)',
        flex: '0 0 50%',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        overflow: 'hidden',
        position: 'relative'
    },
    blueSideBigIcon: {
        position: 'absolute',
        left: '55%',
        top: '60%',
        color: TWITTER_BLUE,
        width: '350%',
        height: '350%',
        transform: 'translate(-50%,-50%)',
        zIndex: -1
    },
    blueSideListInfo: {
        listStyle: 'none',
        width: 380,
        '& h6': {
            color: 'white',
            fontWeight: 600,
            fontSize: 20,
            alignItems: 'flex-start',
            display: 'flex',
            marginBottom: 25
        }
    },
    blueSideListInfoIcon: {
        fontSize: 32,
        marginRight: 16
    },
    loginSide: {
        flex: '0 0 50%',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
    loginSideTwitterIcon: {
        fontSize: 45
    },
    loginSideWrapper: {
        maxWidth: '380px'
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 32,
        marginBottom: 45,
        marginTop: 20
    },
    buttonReg: {
        marginBottom: 20
    }
}));

const SignIn: React.FunctionComponent = (props) => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <div className={classes.wrapper}>
                <section className={classes.blueSide}>
                    <TwitterIcon className={classes.blueSideBigIcon} />
                    <ul className={classes.blueSideListInfo}>
                        <li>
                            <Typography variant="h6">
                                <SearchIcon className={classes.blueSideListInfoIcon} />  Читайте о том, что вам интересно.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="h6">
                                <PeopleOutlineIcon className={classes.blueSideListInfoIcon} />    Узнайте, о чем говорят в мире.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="h6">
                                <ChatBubbleOutlineIcon className={classes.blueSideListInfoIcon} />     Присоединяйтесь к общению.
                            </Typography>
                        </li>
                    </ul>
                </section>
                <div className={classes.loginSide}>
                    <div className={classes.loginSideWrapper}>
                        <TwitterIcon color="primary" className={classes.loginSideTwitterIcon} />
                        <Typography className={classes.loginSideTitle} variant="h4">Узнайте что происходит в мире прямо сейчас</Typography>
                        <Typography><b>Присоединяйтесь к Твиттеру прямо сейчас!</b></Typography>
                        <br />
                        <Button className={classes.buttonReg} variant="contained" color="primary" fullWidth>Зарегистрироваться</Button>
                        <Button onClick={handleClickOpen} variant="outlined" color="primary" fullWidth>Войти</Button>
                        <Enter open={open} handleClose={handleClose} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignIn;
