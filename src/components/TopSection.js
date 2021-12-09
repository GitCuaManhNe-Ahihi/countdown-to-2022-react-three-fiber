import React from "react"
import { App, H1 } from "../styles/AppStyled";
 export default class TopSection extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            time2022: new Date("Jan 1, 2022 0:0:0").getTime(),
            theTime: new Date().getTime(),
            screen:window.innerWidth
          };
        }
        render() {
      var time = this.state.time2022 - this.state.theTime;
      setInterval(() => {
       this.setState({ theTime: new Date().getTime() });
      }, 1000)
      return(
          <>
          {window.addEventListener("resize", () => {this.setState({screen:window.innerWidth})})}
          <H1 screenh1= {this.state.screen}>COUNTDOWN TO NEW YEAR 2022</H1>
            <App screen= {this.state.screen}>
              <span className='day'>{Math.floor(time / (24 * 60 * 60 * 1000)) < 10 ? "0" + Math.floor(time / (24 * 60 * 60 * 1000)) : Math.floor(time / (24 * 60 * 60 * 1000))}</span>
              <span className='hour'>{Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) < 10 ? "0" + Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) : Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}</span>
              <span className='minute'>{Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)) < 10 ? "0" + Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)) : Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))}</span>
              <span className='second'>{Math.floor((time % (1000 * 60)) / 1000) < 10 ? "0" + Math.floor((time % (1000 * 60)) / 1000) : Math.floor((time % (1000 * 60)) / 1000)}</span>
            </App>  
           
            
         </>)}
        
}

