import React from 'react';

const styles = {
    card:{
     display: "flex",
     justifyContent:"center",
     paddingTop:40,
    },
    image:{
    borderRadius: "15px"
    }
  };
  


export default function Footer() {
    return (
        <div  style={styles.card}>
            <a href="https://www.facebook.com/fabian.gutierrez.161214">
                <img className = "projectImg" src= {require("../../assets/meta-logo.png")} alt="Meta logo" width="125" height="125" />
            </a>
            <a href="www.linkedin.com/in/fabian-gutierrez-016523248">
                <img className = "projectImg" src= {require("../../assets/LinkedIn.png")} alt="LinkedIn Logo" width="125" height="125" />
            </a>
            <a href="https://github.com/Guccierrez?tab=repositories">
                <img className = "projectImg" src= {require("../../assets/GitHub-Logo.png")} alt="Github logo" width="125" height="125"  />
            </a>
        </div>


    );
}