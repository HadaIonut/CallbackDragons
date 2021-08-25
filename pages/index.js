import styles from '../styles/Home.module.css';
import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {useUser} from "@auth0/nextjs-auth0";
import {setLogin} from "../store/actions";
import {Typography, Button, makeStyles} from "@material-ui/core";
import UserDataDisplay from "../Components/UserDataDisplayComponent";


const useStyles = makeStyles({
  text: {
    margin: "2rem",
  },
  login: {
    width: "100%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  a: {
    textDecoration: "none",
    color: "black",
    fontWeight: "800",
  },
})

export default function Home() {
  const classes = useStyles();
  const {user, error, isLoading} = useUser();
  const loginUser = useSelector((state) => state.setLoginUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLogin(user?.nickname))
  }, [user, dispatch])

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>{error.message}</div>

  return (
    <div className={styles.container}>
      {user ?
        <div>
          <UserDataDisplay/>
        </div>
        :
        <div className={classes.login}>
          <h2>Search Bar Component</h2>
          <Typography variant="h5" className={classes.text}>To see your Github content please LOGIN.</Typography>
          <Button variant="contained" color="primary" className={classes.btn}>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a className={classes.a} href="/api/auth/login">Login</a>
          </Button>
        </div>
      }
    </div>
  )
}


