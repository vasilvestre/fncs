import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
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
    dialogPaper: {
        minHeight: '60vh',
        maxHeight: '80vh',
    },
})

export interface LoginDialogProps {
    open: boolean
    onClose: (value: string) => void
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
        <Dialog onClose={handleClose} classes={{ paper: classes.dialogPaper }} aria-labelledby="simple-dialog-title"
                open={open}>
            <Route exact path="/sign_in">
                <SignIn
                    onClose={handleListItemClick}
                />
            </Route>
            <Route exact path="/sign_up">
                <SignUp
                    onClose={handleListItemClick}
                />
            </Route>
        </Dialog>
    )
}
