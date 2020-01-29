import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import NavbarStyle from './NavbarStyle'
import { Button } from '@material-ui/core'
import LoginModal from '../Login/LoginModal'
import { AuthService } from '../../services/AuthService'
import { Link } from 'react-router-dom'

interface NavbarProps {
    openLogin: boolean
}

export default function Navbar(props: NavbarProps) {
    const classes = NavbarStyle.useStyles()
    const auth = localStorage.getItem('auth') === 'true'
    const [openLogin, setOpenLogin] = React.useState(props.openLogin)
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const handleClickOpenLogin = () => {
        setOpenLogin(true)
    }

    const handleCloseOpenLogin = () => {
        setOpenLogin(false)
    }

    const handleMenu = (event: any) => {
        setAnchorEl(event.currentTarget)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    const handleDisconnect = () => {
        setAnchorEl(null)
        AuthService.logout()
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>FNCS</Link>
                    </Typography>
                    {!auth && (
                        <Button color="inherit" onClick={handleClickOpenLogin}>
                            <Link style={{ textDecoration: 'none', color: 'white' }} to="/sign_in">Login</Link>
                        </Button>
                    )}
                    <LoginModal open={openLogin} onClose={handleCloseOpenLogin}/>
                    {auth && (
                        <div>
                            <IconButton
                                id="user-button"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleMenuClose}
                            >
                                <MenuItem onClick={handleMenuClose}>
                                    <Link style={{ textDecoration: 'none', color: 'black' }} to='/my_tickets'>My tickets</Link>
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose}>
                                    <Link style={{ textDecoration: 'none', color: 'black' }} to='/account'>My account</Link>
                                </MenuItem>
                                <MenuItem onClick={handleDisconnect}>Disconnect</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    )
}
