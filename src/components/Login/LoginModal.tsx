import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import { blue } from '@material-ui/core/colors'
import SignIn from './SignIn'
import SignUp from './SignUp'
import { Route } from 'react-router-dom'

const useStyles = makeStyles({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
})

export interface LoginDialogProps {
    open: boolean;
    onClose: (value: string) => void;
}

export default function LoginModal(props: LoginDialogProps) {
    const classes = useStyles()
    const { onClose, open } = props
    const handleClose = () => {
        /* onClose(value) */
    }

    const handleListItemClick = (value: string) => {
        onClose(value)
    }

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <Route exact path="/sign_in">
                <SignIn/>
            </Route>
            <Route exact path="/sign_up">
                <SignUp/>
            </Route>
        </Dialog>
    )
}
