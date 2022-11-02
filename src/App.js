import './App.css';
import Header from './components/header'

function App() {
  return (

<body>
  <Header></Header>
    <main class="content">
        <section id="about-me" class="content2">
            <img src="./first_portfolio_pic/about-me.jpeg" alt="selfie of fabian gutierrez" class="float-left" />
            <h2>About Me</h2>
            <p>
                Console.log(Hello world (or whoever is reading this))! My name is Fabian Gutierrez and I'm hoping to break into the tech industry. I worked for 6 years in construction, specifically concrete, so I'm no stranger to hard work.
                When I'm not learning to code I'm out being active either playing soccer, volleyball or just going for a hike. Hopefully by end the end of this course I will have put in enough work to consider myself a full-stack developer.
                In the meantime this portfolio will have to do.
            </p>
        </section>
        <section id="my-projects" class="content2">
                <a href="https://cssgridgarden.com/">
                  <img src="./first_portfolio_pic/grid garden.jpeg" alt="a carrot" class="float-right"/></a>
                <a href="https://flexboxfroggy.com/">
                    <img src="./first_portfolio_pic/flexfrog.png" alt="flex frog" class="float-right"/> </a>
                    <a href="https://safe-taiga-52542.herokuapp.com/login">
                        <img src="./first_portfolio_pic/HappyHoliday.png" alt="Christmas Tracker Login Page" class="float-right"/> </a>
            <h2>Projects</h2>
            <p>Sadly these are NOT my projects, unfortunatly this portfolio is my first major project.I really
                only added these to show that I can do basic pseudo code, somewhat. I promise I'll add my own projects as 
                soon as I make some.
            </p>
        </section>
        <section id="contact-me" class="content2"> 
            <h2>Contact Me</h2>
                <p><a href="https://www.facebook.com/fabian.gutierrez.161214">
                    <img class="logos" src="./first_portfolio_pic/meta.png" alt="Meta logo" width="200" height="200" />
                    </a></p>
                <p><a href="www.linkedin.com/in/fabian-gutierrez-016523248">
                    <img src="./first_portfolio_pic/linked.png" alt="LinkedIn Logo" width="200" height="200" class="logos"/>
                    </a></p>
                <p><a href="https://twitter.com/Guccierrez_f/">
                        <img src="./first_portfolio_pic/twitter.png" alt="Twitter logo" width="200" height="200" class="logos"/>
                        </a></p>
        </section>
    </main>
    <aside class="benefits">
      
        <div class="col-lg-6">
            <form>
                <input type="text" placeholder="Name"/>
                <input type="email"  placeholder="Email"/>
                <input type="text"  placeholder="Subject"/>
                <div>
                    <textarea  rows="5" id="comment" name="text" placeholder="Project Details"></textarea>
                </div>
            </form>
            <button type="button" >submit info</button>
            
        </div>
    </aside>
    <footer>
        <h2>Made by Gucci</h2>
    </footer>
</body>

  
  );
}

export default App;
