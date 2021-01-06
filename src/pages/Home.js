import React from 'react';

function Home() {
    return (
       <> 
       <div style={{backgroundImage: `url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F08%2FWallpapers-laptop-cool-screen.jpg&")`, height:'850px', backgroundRepeat: 'no-repeat'}}>
       <br/>
       <div className="container"> 
       <h1 className="center" style={{color: "white", marginLeft: 75}}>Welcome to my portfolio</h1> 
       </div>
<div className="container" style={{textAlign: "center"}}>
<br/> 
<img src="assets/Starnes_Cole.jpg" /> 
<br/>
<br/>
<br/>
<p style={{backgroundColor: "RGB(240,239,245)", marginLeft: 100, marginRight: 100}}>My name is Cole.  I am a recent graduate of Lamar University's Galloway College of Business. I was there on a full scholarship to play on the football team, which I did for all of the three years I was there. I also joined the track team my senior year, although my career was short-lived due to Covid-19. Shortly before graduating, I decided to enroll at SMU's Web Development bootcamp to learn full-stack development. </p>
</div> 
</div>
</>
    )
}
export default Home;