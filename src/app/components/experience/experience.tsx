import { SectionTitle } from "../sectionTitle/section-title"
import { Skill } from "../skill/skill"
import "./experience.scss"

export function Experience(){
    return(
        <div className="experience">
            <SectionTitle text="Experience"/>
            <p>3 years working as a Dev, in companys such as Certain and Vertzon</p>
            <div className="experience-time">
                <Skill image="/react.png" measure={2} years="2 years"/>
                <Skill image="/ts.png" measure={3} years="3 years"/>
                <Skill image="/js.png" measure={3} years="3 years"/>
                <Skill image="/java.png" measure={1} years="1 year"/>
            </div>
        </div>
    )    
}