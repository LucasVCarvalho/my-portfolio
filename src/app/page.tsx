import { Experience } from "./components/experience/experience";
import { Header } from "./components/header/header";
import { EmailIcon } from "./components/Icons/email-icon";
import { Info } from "./components/information/information";
import { SocialBtnsProps } from "./components/social-btns/social-btns";
import "./styles/home.scss"

export default function Home() {
  return (
    <main className="container">
      <Header/>
      <Experience/>
      <Info/>  
        <div className="buttons">
          <div className="social">
            <SocialBtnsProps/>
          </div>
          <a className="btn-primary" href="mailto:teste@gmail.com">
            contact me!
            <EmailIcon/>
          </a>
        </div>
    </main>
  );
}
