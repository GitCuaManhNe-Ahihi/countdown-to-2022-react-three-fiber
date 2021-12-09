
import '../styles/AppStyled.js';
import React, { Component, Suspense } from 'react'
import {Canvas} from '@react-three/fiber'
import Earth from '../components/Earth';
import Sun from '../components/Sun';
import TopSection from '../components/TopSection';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time2022: new Date("Jan 1, 2022 0:0:0").getTime(),
      theTime: new Date().getTime()
    };
  }
   
  render() {
    // var time = this.state.time2022 - this.state.theTime;
    // setInterval(() => {
    //   this.setState({ theTime: new Date().getTime() });
    // }, 1000)
    return (
      <>
      <div style={{height:"100vh",width:"100vw"}}>
        <TopSection></TopSection>
      <Canvas  colorManagement
      shadowMap
      camera={{ position: [-3, 2, 5], fov: 90 }}>
        <ambientLight color="#3385ff" intensity={0.1} opacity = {0.4} />
            <directionalLight castShadow
            shadow-mapSize-height={1512}
            shadow-mapSize-width={1512} scale={[2,2,2]} position={[3,0,3]}  color={0xffffff} />
          <Suspense  fallback = {null}>
              <Earth></Earth>
              <Sun></Sun>
          </Suspense>
        </Canvas>

      </div>
        
        {/* <h1>COUNTDOWN TO 2022</h1>
        <div className="App">
          <span className='day'>{Math.floor(time / (24 * 60 * 60 * 1000)) < 10 ? "0" + Math.floor(time / (24 * 60 * 60 * 1000)) : Math.floor(time / (24 * 60 * 60 * 1000))}</span>
          <span className='hour'>{Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) < 10 ? "0" + Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) : Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}</span>
          <span className='minute'>{Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)) < 10 ? "0" + Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)) : Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))}</span>
          <span className='second'>{Math.floor((time % (1000 * 60)) / 1000) < 10 ? "0" + Math.floor((time % (1000 * 60)) / 1000) : Math.floor((time % (1000 * 60)) / 1000)}</span>
        </div> */}
        
      </>
    );
  }
}
