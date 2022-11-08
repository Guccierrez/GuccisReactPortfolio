import React from 'react';
const styles = {
  card:{
   display: "flex",
   justifyContent:"center",
  },
};




export default function Resume() {
  return (
    <div >
      <h1>About Me</h1>
      <p>Click on the resume to download it:</p>
      <div style={styles.card}>
<a href={require("../../assets/resumeScreenshot.png")} download>
  <img src={require("../../assets/resumeScreenshot.png")} alt="W3Schools" width="600" height="800" style={styles.card}/>
</a>
</div>
    </div>
  );
}