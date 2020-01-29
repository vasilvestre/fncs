import React from 'react'
import User from '../../models/User'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))

export default function UserPanel(props: any) {
    const classes = useStyles()
    const user: User = JSON.parse(String(localStorage.getItem('user')))
    const [discountCode, setDiscountCode] = React.useState(String(user.discountCode))

    const handleSubmit = (event: any) => {
        event.preventDefault()
        user.discountCode = discountCode
        localStorage.setItem('user', JSON.stringify(user))
    }

    const onChangeDiscountCode = (event: any) => {
        setDiscountCode(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                defaultValue={user.email}
                placeholder={'eve.holt@reqres.in'}
                disabled={true}
            />
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="discountCode"
                label="discountCode"
                type="text"
                id="discountCode"
                value={discountCode}
                onChange={onChangeDiscountCode}
                autoFocus
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Enregistrer
            </Button>
        </form>
    )
}

