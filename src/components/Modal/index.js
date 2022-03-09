import React, {useRef, useContext, useState} from 'react'
import {UserContext} from '../../context/userDataContext';
import { HamburgerContext } from '../../context/hamburgerContext'
import { Overlay, Form, CloseBtn, FormTitle, FormLabel, FormInput, SubmitBtn, FormSubtext, Error } from './ModalElements'
import {initializeFirebase} from "../../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

initializeFirebase()

const Modal = ({showModal, setShowModal, whichModal, setWhichModal}) => {
  const [emailEmpty, setEmailEmpty] = useState(false)
  const [passwordEmpty, setPasswordEmpty] = useState(false)
  const [passwordShort, setPasswordShort] = useState(false)
  const {logUserIn} = useContext(UserContext)
  const {setModalOpen} = useContext(HamburgerContext)

function switcharoo() {
  whichModal === 'login' ? setWhichModal('signup') : setWhichModal('login')
  setEmailEmpty(false)
  setPasswordEmpty(false)
  setPasswordShort(false)
  emailRef.current.value = null
  passwordRef.current.value = null
}

const emailRef = useRef(null)
const passwordRef = useRef(null)

const handleSubmit = (e) => {
  e.preventDefault()
  const auth = getAuth();

  if(whichModal === 'signup'){
    emailRef.current.value !== '' && setEmailEmpty(false)
    passwordRef.current.value !== '' && setPasswordEmpty(false)
    passwordRef.current.value.length > 5 && setPasswordShort(false)

      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      ).then((userCredential) => {
        logUserIn()
        setShowModal(false)
        setModalOpen(false)
      })
      .catch((error) => {
        emailRef.current.value === '' && setEmailEmpty(true)
        passwordRef.current.value === '' && setPasswordEmpty(true)
        passwordRef.current.value.length < 6 && setPasswordShort(true)
      });
    }
  if(whichModal === 'login') {
    emailRef.current.value !== '' && setEmailEmpty(false)
    passwordRef.current.value !== '' && setPasswordEmpty(false)
    passwordRef.current.value.length > 5 && setPasswordShort(false)

    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    ).then((userCredential) => {
      logUserIn()
      setShowModal(false)
      setModalOpen(false)
    })
    .catch((error) => {
      emailRef.current.value === '' && setEmailEmpty(true)
      passwordRef.current.value === '' && setPasswordEmpty(true)
      passwordRef.current.value.length < 6 && setPasswordShort(true)
    });
  }
}

return (
  <>
    {showModal ? (
      <Overlay >
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <CloseBtn onClick={() => {
              setModalOpen(false)
              setShowModal(prev => !prev)
              setEmailEmpty(false)
              setPasswordEmpty(false)
              setPasswordShort(false)
            }}>
          </CloseBtn>
          {whichModal === 'login' ?
            <>
              <FormTitle>Login</FormTitle>
              <FormLabel>Email<FormInput type='email' name='email' placeholder="example@gmail.com" ref={emailRef}></FormInput><Error>{emailEmpty && "Email required"}</Error></FormLabel>
              <FormLabel>Password<FormInput type='password' name='password' placeholder="Type in your Password" ref={passwordRef}></FormInput><Error>{passwordEmpty ? "Password required" : (passwordShort && "Password has to be at least 6 characters long")}</Error></FormLabel>
              <SubmitBtn type="submit" value='Login' onSubmit={handleSubmit}></SubmitBtn>
              <FormSubtext>Don’t have an account? <span onClick={switcharoo}>Sign up</span></FormSubtext>
            </> : 
            <>
              <FormTitle>Sign Up</FormTitle>
              <FormLabel>Email<FormInput type='email' name='email' placeholder="example@gmail.com" ref={emailRef}></FormInput><Error>{emailEmpty && "Email required"}</Error></FormLabel>
              <FormLabel>Password<FormInput type='password' name='password' placeholder="Type in your Password" ref={passwordRef}></FormInput><Error>{passwordEmpty ? "Password required" : (passwordShort && "Password has to be at least 6 characters long")}</Error></FormLabel>
              <SubmitBtn type="submit" value='Sign Up'></SubmitBtn>
              <FormSubtext>Already have an account? <span onClick={switcharoo}>Login</span></FormSubtext>
            </>
          }
        </Form>
      </Overlay>
      )
    : null }
    </>
  )
}
export default Modal
