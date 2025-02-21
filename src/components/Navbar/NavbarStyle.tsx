import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

export default class NavbarStyle {

    public static useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }));
}
