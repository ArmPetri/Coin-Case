import React, {useRef, useContext} from 'react'
import {UserContext} from '../../context/userDataContext';
import { Overlay, Form, CloseBtn, FormTitle, FormLabel, FormInput, SubmitBtn, FormSubtext } from './ModalElements'
import {initializeFirebase} from "../../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

initializeFirebase()

const Modal = ({showModal, setShowModal, whichModal, setWhichModal}) => {
  const {logUserIn} = useContext(UserContext)

function switcharoo() {
  whichModal === 'login' ? setWhichModal('signup') : setWhichModal('login')
}

const emailRef = useRef(null)
const passwordRef = useRef(null)

const handleSubmit = (e) => {
  e.preventDefault()
  const auth = getAuth();

  if(whichModal === 'signup'){
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    ).then((userCredential) => {
      logUserIn()
      setShowModal(false)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
    });
  } 
  if(whichModal === 'login') {
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    ).then((userCredential) => {
      logUserIn()
      setShowModal(false)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
    });
  }
}

return (
  <>
    {showModal ? (
      <Overlay >
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <CloseBtn src={CloseBtn} onClick={() => {
              setShowModal(prev => !prev)
            }}>
          </CloseBtn>
          {whichModal === 'login' ?
            <>
              <FormTitle>Login</FormTitle>
              <FormLabel>Email<FormInput type='email' name='email' placeholder="example@gmail.com" ref={emailRef}></FormInput></FormLabel>
              <FormLabel>Password<FormInput type='password' name='password' placeholder="Type in your Password" ref={passwordRef}></FormInput></FormLabel>
              <SubmitBtn type="submit" value='Login' onSubmit={handleSubmit}></SubmitBtn>
              <FormSubtext>Don’t have an account? <span onClick={switcharoo}>Sign up</span></FormSubtext>
            </> : 
            <>
              <FormTitle>Sign Up</FormTitle>
              <FormLabel>Email<FormInput type='email' name='email' placeholder="example@gmail.com" ref={emailRef}></FormInput></FormLabel>
              <FormLabel>Password<FormInput type='password' name='password' placeholder="Type in your Password" ref={passwordRef}></FormInput></FormLabel>
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
