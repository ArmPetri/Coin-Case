import React from 'react'
import { Overlay, Form, CloseBtn, FormTitle, FormLabel, FormInput, SubmitBtn, FormSubtext } from './ModalElements'

const Modal = ({showModal, setShowModal, whichModal, setWhichModal}) => {

function switcharoo() {
  whichModal === 'login' ? setWhichModal('signup') : setWhichModal('login')
}

  return (
    <>
      {showModal ? (
      <Overlay >
        <Form>
          <CloseBtn src={CloseBtn} onClick={() => setShowModal(prev => !prev)}></CloseBtn>
          <FormTitle>{whichModal === 'login' ? 'Login' : 'Sign Up'}</FormTitle>
          <FormLabel>Email<FormInput type='text' placeholder="example@gmail.com"></FormInput></FormLabel>
          <FormLabel>Password<FormInput type='text' placeholder="Type in your Password"></FormInput></FormLabel>
          
          <SubmitBtn type="submit" value={whichModal === 'login' ? 'Login' : 'Sign up'}></SubmitBtn>
          {
            (whichModal === 'login') ?  (<FormSubtext>Don’t have an account? <span onClick={switcharoo}>Sign up</span></FormSubtext>) :
            (<FormSubtext>Already have an account? <span onClick={switcharoo}>Login</span></FormSubtext>)
          }
        
        </Form>
      </Overlay>
      )
     : null }
    </>
  )
}

export default Modal
