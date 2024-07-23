import { GitHubIcon } from "../Icons/github-icon";
import { InstaIcon } from "../Icons/insta-icon";
import { LinkedInIcon } from "../Icons/linkedin-icon";
import { TwitterIcon } from "../Icons/twitter-icon";

import "./social-btns.scss"

interface SocialBtnsProps{

}
export function SocialBtnsProps(props: SocialBtnsProps){
    return(
        <div className="social">
            <a href="">
                <InstaIcon/>
            </a>
            <a href="">
                <LinkedInIcon/>
            </a>
            <a href="">
                <GitHubIcon/>
            </a>
            <a href="">
                <TwitterIcon/>
            </a>
        </div>
    )
}