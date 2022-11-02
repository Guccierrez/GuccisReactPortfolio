let styles = {
    header: {
        padding: 20,
        fontFamily: 'Trebuchet MS', 
        backgroundColor: "#000000",
        color: "#ffffff",
    },
  
}

function Header() {
    return (
      <header style = {styles.header}>    
          <h1>Fabian Gutierrez</h1>
          <nav>
              <ul>
                  <li>
                      <a href="#about-me">About Me</a>
                  </li>
                  <li>
                      <a href="#my-projects">My Projects</a>
                  </li>
                  <li>
                      <a href="#contact-me">Contact Me</a>
                  </li>
              </ul>
          </nav>
      </header>
    )
}
export default Header