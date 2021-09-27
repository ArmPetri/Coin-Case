import styled, {keyframes} from 'styled-components'


const scrolling = keyframes `
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
`

export const InfoHead = styled.div `
  position: relative;
  height: 40px;
  width: 100vw;
  border-bottom: 1px solid #E5ECFA;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; 
`

export const InfoContainer = styled.div `
  position: absolute;
  overflow: hidden;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items:center;
  transform: translateX(-100%);
  animation: ${scrolling} 50s linear infinite;
`

export const Stats = styled.h4 `
  color: #E5ECFA;
  font-size: 1rem;
  font-weight: normal;
`