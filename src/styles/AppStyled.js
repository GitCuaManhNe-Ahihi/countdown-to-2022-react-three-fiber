import styled,{keyframes} from 'styled-components';
const  setcolor  = keyframes ` 
  0% {
    color: #ee7752;
  }
  25% {
    color: #e73c7e;
  }
  50% {
    color: #23a6d5;
  }
  75% {
    color: #23d5ab;
  }
  100% {
    color: #ee7752;
  }

`
const  gradient = keyframes `
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

const App  = styled.div`
  text-align: center;
  position: absolute;
  top:  ${props => props.screen > 768?50:75}%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  user-select: none;
  z-index: 999;
  span {
    width: ${props => props.screen > 768?100:30}px;
    height: ${props => props.screen > 768?100:30}px;
    margin: 0 ${props => props.screen > 768?80:30}px;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    font-size: ${props => props.screen > 768?50:20}px;
    background-size: 400% 400%;
    animation: ${gradient} 5.5s ease infinite;

    color: white;
    line-height: ${props => props.screen > 768?100:30}px;
    text-align: center;
    border-radius: ${props => props.screen > 768?15:5}px;
    position: relative;
    &:first-child{
      margin: 0  ${props => props.screen > 768?80:25}px 0 -10px;
    }
    
  }
  .day::after {
    content: "Days";
    position: absolute;
    font-weight: 800;
    bottom:  ${props => props.screen > 768?-30:-8}px;
    font-size: ${props => props.screen > 768?30:13}px;
    right: ${props => props.screen > 768?-70:-35}px;
    color: rgb(255, 255, 255);
  }
  .hour::after {
    content: "Hours";
    position: absolute;
    font-weight: 800;
    bottom:  ${props => props.screen > 768?-30:-8}px;
    font-size:  ${props => props.screen > 768?30:13}px;
    right:  ${props => props.screen > 768?-90:-40}px;
    color: rgb(255, 255, 255);
  }
  .minute::after {
    content: "Minutes";
    position: absolute;
    font-weight: 800;
    bottom:  ${props => props.screen > 768?-30:-8}px;
    font-size:  ${props => props.screen > 768?30:13}px;
    right:  ${props => props.screen > 768?-120:-55}px;
    color: rgb(255, 255, 255);
  }
  .second::after {
    content: "Seconds";
    position: absolute;
    font-weight: 800;
    bottom:  ${props => props.screen > 768?-30:-8}px;;
    font-size: ${props => props.screen > 768?30:13}px;
    right:  ${props => props.screen > 768?-120:-55}px;
    color: rgb(255, 255, 255);
  }
`

 const H1  =styled.h1`
  position: absolute;
  font-weight: bold;
  font-size:  ${props => props.screenh1> 768?100:40}px;;

  text-align: center;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  user-select: none;
  z-index: 999;
  animation:  ${setcolor} 2s linear infinite;
`
export {App,H1}