import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

interface InfoProps{

}

export function Info(props: InfoProps){
    return(
        <div className="infos">
            <SectionTitle text="Languages"/>
            <div className="languages-info">
                <span>EN - Advanced</span>
                <span>PT-BR - Native Speaker</span>
            </div>
            <SectionTitle text="Education"/>
            <div className="educational-info">
                <span></span>
                <span>🎓 Digital Games - Fatec Carapicuiba</span>
            </div>
        </div>

    )
}