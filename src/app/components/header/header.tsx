import Image from "next/image";

import "./header.scss"

export function Header(){
    return(
        <div className="header">
            <div>              
            <h1>Hi, i´m Lucas</h1>
            <h2>Fullstack Dev</h2>
            </div>
            <Image 
                src="/me.jpg"
                alt="Me"
                width={325}
                height={310}
                priority  
            />     
        </div>  
    );
}