import React, { useEffect, useRef, useState } from 'react'
import './LoginSignup.css'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import logo1 from '../../logo-1.png'
import google from '../../Image-resources/google.png'
import { login, signup } from '../../features/UserSlice'

const url = 'https://tasty-serverside.vercel.app/auth/classic'
const authURL = axios.create({
  baseURL: url,
})

const LoginSignup = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [pword, setPwd] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [regScreen, setRegScreen] = useState(false)
  const [focus, setFocus] = useState(false)
  const [focusPwd, setFocusPwd] = useState(false)
  const input = useRef(null)
  const pwd = useRef(null)
  const validate = (eml, pwd, cb) => {
    if (!eml || !pwd) {
      setErrorMsg('email or password can not be empty')
      localStorage.removeItem('usertoken')
      return;
    }
    if (pwd.length <= 4 && pwd.length > 0) {
      setErrorMsg('password characters can not be less than 5')
      localStorage.removeItem('usertoken')
      return;
    }
    else {cb()}
  }

  const googleAuth = () => {
    window.open('https://tasty-serverside.vercel.app/auth/google', '_self')
  }
  
  const register = async () => {
    try {
      const { data } = await authURL.post('/register', { email, pword })
      dispatch(signup(email))
      setErrorMsg('')
      validate(email, pword, ()=>{
        localStorage.setItem('usertoken', data.token);
        setRegScreen(true)
        
      })   
    } catch (error) {
      const { msg } = error.response.data
      setErrorMsg(msg)
      console.log(msg)
    }
  }
  const signIn = () => {
    try {
      validate(email, pword, async ()=>{
        if (email && pword) {
          const token = localStorage.getItem('usertoken')
          if (!token) {
            setErrorMsg('wrong email or password')
          }
          const { data } = await authURL.get('/login', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          dispatch(login(data.auth))
        }
      })
    } catch (error) {
      const { msg } = error.response.data
      console.log(msg)
      setErrorMsg('wrong email or password/ click signup instead')
      localStorage.removeItem('usertoken');
      return;
    }
  }
  useEffect(()=>{
    if(email.length >= 1 ){
      setFocus(true)
    }
    else {setFocus(false)}
    if(pword.length >= 1){
      setFocusPwd(true)
    }
    else{setFocusPwd(false)}
  },[email, pword])

  return (
    <React.Fragment>
      <div className='login-wrapper'>
        <div
          className='login-container'
          onClick={() => {
            if (regScreen===false){
              const inputFocus = input.current.value;
              const pwdFocus = pwd.current.value;
              if (inputFocus < 1) {
                setFocus(false)
              }
              if (pwdFocus < 1) {
                setFocusPwd(false)
              }
            }
            else return;
          }}
        >
          <div className='login-content'>
            <img className='logo' src={logo1} alt='logo' />
            <a className='google-login' onClick={googleAuth}>
              <img src={google} alt='google' />
              continue with google
            </a>
            {regScreen ? (
              <div className='reg-success'>
                <i className='fa-solid fa-thumbs-up fa-bounce'></i>
                <h2>Your account has been created successfully</h2>
                <p>Sign In to continue</p>
              </div>
            ) : (
              <React.Fragment>
                <div className='login-line'>
                  <p>or</p>
                </div>
                <div className='email-container'>
                  <input
                    className='input'
                    onChange={() => {
                      setEmail(input.current.value)
                    }}
                    ref={input}
                    onClick={(e) => {
                      e.stopPropagation()
                      setFocus(true)
                    }}
                    type='text'
                    id='email'
                  />
                  <label htmlFor='email' className={focus ? 'focus' : 'label'}>
                    email
                  </label>
                </div>
                <div className='password-container'>
                  <input
                    className='input'
                    onChange={() => {
                      setPwd(pwd.current.value)
                    }}
                    ref={pwd}
                    type='password'
                    id='password'
                    onClick={(e) => {
                      e.stopPropagation()
                      setFocusPwd(true)
                    }}
                  />
                  <label
                    htmlFor='email'
                    className={focusPwd ? 'focus' : 'label'}
                  >
                    password
                  </label>
                </div>
              </React.Fragment>
            )}
            {errorMsg && (
              <div className='login-error-container'>
                <p>{errorMsg}</p>
              </div>
            )}
            <div className='sign-in' onClick={signIn}>
              <p>Sign in</p>
            </div>
            {regScreen || <p className='sign-up'>
              New to Tasty? <span onClick={register}> Sign up</span>
            </p>}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default LoginSignup

