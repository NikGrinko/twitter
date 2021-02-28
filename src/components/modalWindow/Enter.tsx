import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


type ModalProps = {
    handleClose: any;
    open: any;
};
export const Enter: React.FC<ModalProps> = ({ handleClose, open }: ModalProps) => {
    return (
        <>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Войти в Твиттер</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Введите email"
                        type="email"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        label="Введите пароль"
                        type="password"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Отмена
                                </Button>
                    <Button onClick={handleClose} color="primary">
                        Войти
                                </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

