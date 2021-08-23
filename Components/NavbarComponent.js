import AppBar from '@material-ui/core/AppBar';
import { Toolbar, IconButton, makeStyles, Typography , Badge, } from '@material-ui/core';
import { AccountTreeSharp, FaceSharp } from '@material-ui/icons';
const useStyles = makeStyles({
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'fixed',
    background: "rgb(92,164,169)",
    background: "linear-gradient(135deg, rgba(92,164,169,1) 20%, rgba(71,170,213,1) 61%, rgba(126,144,208,1) 97%)"
  },
  logo: {
    position: 'relative',
    color: '#FFFFFF',
    padding: '2px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  profile: {
    position: 'relative',
  }
})
function NavbarComponent() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position = 'static' className = {classes.navbar}>
        <Toolbar className = {classes.toolbar}>
            <AccountTreeSharp fontSize = "large" className = {classes.logo}/>
            <Typography className = {classes.logo} variant= "h5">CBDragons</Typography>
            <FaceSharp className = {classes.profile}/>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavbarComponent
