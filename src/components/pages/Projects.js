import React from 'react';

const styles = {
  card:{
   display: "flex",
   justifyContent:"space-around",
   paddingTop:80,
  }
};


export default function Blog() {
  return (
    <div >



<div style={styles.card}>

  
    <div className = "projectImg">
    <a href="https://safe-taiga-52542.herokuapp.com/login">
    <img src={require("../../assets/HappyHoliday.png")} alt="Christmas Tracker Login Page"  width="600" height="400"/>
     </a>
    </div>

    <div className = "projectImg" >
    <a href="https://ausmo.github.io/ISS-Tracker/">
    <img src= {require("../../assets/ISSScreenshot.png")} alt="ISSTrackerLink" width="600" height="400"/>
  </a>
   </div>

</div>


<div style={styles.card}>
   <div className = "projectImg">
   <a href="https://guccierrez.github.io/WeatherDash/">
    <img src= {require("../../assets/weatherForcast.png")} alt="Weather forcast" width="600" height="400"/>
  </a>
  </div>

  <div className = "projectImg">
   <a href="https://github.com/Guccierrez/TeamProfileGenerator">
    <img src= {require("../../assets/teamGenerator.png")} alt="Team Profile Generator" width="600" height="400"/>
  </a>
  </div>
</div>
   </div>
  );
}
