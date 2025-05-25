import { getImageUrl, getText } from './utils.js';


interface plant {
    name: string;
}


function PlantImage({name}: plant) {
    return (
        <img 
            className = "plantImage mx-auto"
            src= {getImageUrl(name)}
            alt= {name}
            height = {400}
            width = {400}
        />
    )
}
function PlantText({name}: plant) {
    return (
        <div className = "my-5 mx-auto">
            <p text-sm = "true" className = "text-[#2E282A] tracking-tight font-[family-name:var(--font-ibm-plex-sans)]">
                {getText(name)}
            </p>

        </div>
        
    )
}

function PlantHeading({name}: plant) {
    return (
        <h1 text-xl = "true" className = "text-[#2E282A] text-center my-5 tracking-wider text-5xl font-[family-name:var(--font-ibm-plex-serif)]" >
            {name}
        </h1>
    )
}




export default function Plantdescription({name}: plant) {
    return (
        
        <section>
            <PlantHeading name = {name}/>
            <PlantImage name = {name}/>
            <PlantText name = {name}/>
        </section>
    );
}

