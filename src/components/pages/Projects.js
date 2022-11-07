import React from 'react';
import Card from 'react-bootstrap/Card';

const styles = {
  card:{
   display: "flex",
   justifyContent:"space-around",
 paddingBottom:50,
  },
};


export default function Projects() {
  return (
    <div>
       <h1>My Projects</h1>
     <div  style={styles.card}>
    
    <Card style={{ width: '23rem' }} className = "projectImg">
      <Card.Img variant="top" src={require("../../assets/HappyHoliday.png")} />
      <Card.Body>
        <Card.Title>The Happy Holidays Gift Tracker</Card.Title>
        <Card.Text>
          The holidays are stressful but they don't have to be! With the Happy Holidays Gift Tracker
          you can keep track of all the gifts you need this season.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="https://safe-taiga-52542.herokuapp.com/login">Deployed Project</Card.Link>
        <Card.Link href="https://github.com/Guccierrez/HappyHolidaysGiftTracker">Link to Repositories</Card.Link>
      </Card.Body>
    </Card>


<Card style={{ width: '23rem' }} className = "projectImg">
      <Card.Img variant="top" src={require("../../assets/ISSScreenshot.png")} />
      <Card.Body>
        <Card.Title>I.S.S tracker</Card.Title>
        <Card.Text>
        With this ISS location tracking app you will be able to track HALF of all the space stations on this side of the milky way.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="https://ausmo.github.io/ISS-Tracker/">Deployed Project</Card.Link>
        <Card.Link href="https://github.com/Guccierrez/ISS-Tracker">Link to Repositories</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '23rem' }} className = "projectImg">
      <Card.Img variant="top" src={require("../../assets/teamGenerator.png")} />
      <Card.Body>
        <Card.Title>Gucci's Team Profile Generator</Card.Title>
        <Card.Text>
        With this Node Command-line apllication you'll use inquirer to enter your employees information and generate amazing cards with all the information a head CEO will ever need.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="https://github.com/Guccierrez/TeamProfileGenerator">Link to Repositories(only backend)</Card.Link>
      </Card.Body>
    </Card>
    </div> 

    <div style={styles.card} >
    <Card style={{ width: '23rem' }} className = "projectImg">
      <Card.Img variant="top" src={require("../../assets/weatherForcast.png")} />
      <Card.Body>
        <Card.Title>Always Sunny Weather Dashboard</Card.Title>
        <Card.Text>
        With this weather report app it's always a sunny day! Not really, but only because it uses the latest in API technolgy to bring users the most current weather updates from ALLLLL around the world!
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="https://guccierrez.github.io/WeatherDash/">Deployed Project</Card.Link>
        <Card.Link href="https://github.com/Guccierrez/WeatherDash">Link to Repositories</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '23rem' }} className = "projectImg">
      <Card.Img variant="top" src={require("../../assets/BestNotesApp.png")} />
      <Card.Body>
        <Card.Title>The World's Best Notes App</Card.Title>
        <Card.Text>
          Have you ever needed to take notes AND save them? Well now you can(well as long as you have access to the web)
          Not only that but once you don't need them anymore there's a nuilt in delete function!
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="https://quiet-lowlands-11282.herokuapp.com/">Deployed Project</Card.Link>
        <Card.Link href="https://github.com/Guccierrez/BestNoteTakerApp">Link to Repositories</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '23rem' }} className = "projectImg">
      <Card.Img variant="top" src={require("../../assets/TimedQuiz.png")} />
      <Card.Body>
        <Card.Title>Javascript Timed Quiz</Card.Title>
        <Card.Text>
         Test your knowledge of JS with this state of the art quiz, that not only counts down faster when you
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="https://guccierrez.github.io/Timed_Quiz/">Deployed Project</Card.Link>
        <Card.Link href="https://github.com/Guccierrez/Timed_Quiz">Link to Repositories</Card.Link>
      </Card.Body>
    </Card>
</div>




</div>



  );
}




// export default function Blog() {
//   return (
//     <div >



// <div style={styles.card}>

  
//     <div className = "projectImg">
//     <a href="https://safe-taiga-52542.herokuapp.com/login">
//     <img style={styles.image} src={require("../../assets/HappyHoliday.png")} alt="Christmas Tracker Login Page"  width="600" height="400" />
//      </a>
//     </div>

//     <div className = "projectImg" >
//     <a href="https://ausmo.github.io/ISS-Tracker/">
//     <img style={styles.image} src= {require("../../assets/ISSScreenshot.png")} alt="ISSTrackerLink" width="600" height="400"/>
//   </a>
//    </div>

// </div>


// <div style={styles.card}>
//    <div className = "projectImg">
//    <a href="https://guccierrez.github.io/WeatherDash/">
//     <img style={styles.image} src= {require("../../assets/weatherForcast.png")} alt="Weather forcast" width="600" height="400"/>
//   </a>
//   </div>

//   <div className = "projectImg">
//    <a href="https://github.com/Guccierrez/TeamProfileGenerator">
//     <img style={styles.image} src= {require("../../assets/teamGenerator.png")} alt="Team Profile Generator" width="600" height="400"/>
//   </a>
//   </div>
// </div>
//    </div>
//   );
// }
