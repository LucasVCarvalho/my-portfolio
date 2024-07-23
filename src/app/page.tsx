import { Experience } from "./components/experience/experience";
import { Header } from "./components/header/header";
import "./styles/home.scss"

export default function Home() {
  return (
    <main className="container">
      <Header/>
      <Experience/>  
        <div className="infos">
          <h3>Languages</h3>
          <div className="languages-info">
            <span>EN - Advanced</span>
            <span>PT-BR - Native Speaker</span>
          </div>
          <h3>Education</h3>
          <span>🎓 Digital Games - Fatec Carapicuiba</span>
        </div>
        <div className="buttons">
          <div className="social">

          </div>
          <button>contact me!</button>
        </div>
    </main>
  );
}
