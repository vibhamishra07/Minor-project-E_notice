import React, { createContext, useState } from 'react'
import loginBackground from '../Images/loginBackground.jpeg';
import './Login.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';

import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import SnackBar from './SnackBar';
import NoticeBox from '../Common/NoticeBox';
import App from '../../App';
import Notice from '../Common/Notice';
import Homepage from '../Homepage/Homepage.jsx';
// import {Success} from './SuccessContext';



const useStyles = makeStyles((theme) => ({
  
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '70%',
    },
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop:'2rem'
  },
}));
  
const Login = () => {
  
    const classes = useStyles();
  
    const [values, setValues] = React.useState({
      email: '',
      password: '',
      showPassword: false,
    });
    const [emailError, setEmailError]=useState('');
    const [passwordError, setPasswordError]=useState('');
    const [successMsg, setSuccessMsg]=useState('Login Successfull');
  
    
    const handleEmailChange = (event) => {
      setEmailError('');
      setSuccessMsg('');
      setValues({ ...values, email: event.target.value });
    };
    const handlePasswordChange = (prop)=> (event) => {
      setPasswordError('');
      setSuccessMsg('');
      setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
      setEmailError('');
      setSuccessMsg('');
      setValues({ ...values, showPassword: !values.showPassword });
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    

    const handleFormSubmit=(e)=>{
      e.preventDefault();
      if(values.email!==''){
        const emailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(emailRegex.test(values.email)){
          setEmailError('');
          if(values.email==='vibha@gmail.com'){
            setEmailError('');
            if(values.password==='demo'){
              setValues({ ...values, email:'', password:'' });
              setSuccessMsg('Login Successfull');
              window.location.href='/Academic';
            }else{
              setPasswordError('Incorrect password');
            }
          }else{
            setEmailError('Incorrect Email');
          }

        }else{
          setEmailError('Invalid Email');
        }
      }else{
        setEmailError('Email is Required');
      }

      if(values.password!==''){
        if(values.password==='demo'){
          setValues({ ...values, email:'', password:'' });
        }else{
          setPasswordError('Incorrect password');
        }
      }else{
        setPasswordError('Password is Required');
      }
    }

    
  
  
  return (
    <>
    {/* <Success successMsg={successMsg}/> */}
    <div className="login">
      <div className="login_box">
        <div className="login_form">
          <div className="heading-login">
            <AccountCircleIcon />
            <h1>Admin Login</h1>
          </div>
          <form className={classes.root} noValidate autoComplete="off" onSubmit={handleFormSubmit}>
            <TextField id="email" type='email' label="Email" value={values.email} required onChange={handleEmailChange}/>
             {emailError&&<div className='errorMsg'>{emailError}</div>}

            <FormControl className={clsx(classes.margin, classes.textField)}>
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handlePasswordChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            {passwordError&&<div className='errorMsg'>{passwordError}</div>}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="submitbtn"
            >
            LOGIN
            </Button>
          </form>
        </div>
        <img src={loginBackground}></img>
      </div>
      
    </div>
    </>
  );
}
export default Login;
