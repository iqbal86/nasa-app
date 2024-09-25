import React from 'react'
import { makeStyles } from '@mui/styles'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { Theme } from '@mui/material/styles'
import { Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    backgroundColor: '#000000 !important',
  },
  logo: {
    width: '75px',
    height: '75px',
    marginRight: '4px',
  },
  title: {
    fontFamily: 'monospace',
    fontWeight: `700 !important`,
    letterSpacing: '.3rem',
    color: '#ffffff',
    textDecoration: 'none',
  },
  navButton: {
    color: '#ffffff !important',
    display: 'block',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-start',
    },
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    [theme.breakpoints.up('md')]: {
      flexGrow: 0,
    },
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(2),
    },
    flexGrow: 1,
  },
  menuIcon: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  navButtons: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
}))

const nasaPageHeaderPrefix = 'NasaPageHeader_'

const NasaPagesHeader = () => {
  const classes = useStyles()
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const navigate = useNavigate()

  const pages = ['APOD', 'MARS ROVER PHOTOS']

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleNavigate = (page: string) => {
    const routeMap: { [key: string]: string } = {
      APOD: '/',
      'MARS ROVER PHOTOS': '/rover',
    }
    navigate(routeMap[page])
    handleCloseNavMenu()
  }

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar} disableGutters>
        <Grid container sx={{ px: 2 }}>
          <Grid item className={classes.logoContainer}>
            <IconButton component="a" href="" sx={{ padding: 0 }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg"
                alt="Nasa"
                className={classes.logo}
              />
            </IconButton>
          </Grid>

          <Grid item className={classes.menuIcon}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              data-testid={`${nasaPageHeaderPrefix}_menuIcon`}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => handleNavigate(page)}
                  data-testid={`${nasaPageHeaderPrefix}_menuItem${page}`}
                >
                  <Button key={page}>{page}</Button>
                </MenuItem>
              ))}
            </Menu>
          </Grid>

          <Grid
            item
            className={classes.navButtons}
            data-testid={`${nasaPageHeaderPrefix}_navButtonsContainer`}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleNavigate(page)}
                className={classes.navButton}
                data-testid={`${nasaPageHeaderPrefix}_navButton${page}`}
              >
                {page}
              </Button>
            ))}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default NasaPagesHeader
