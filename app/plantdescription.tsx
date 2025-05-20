import { getImageUrl, getText } from './utils.js';


interface plant {
    name: string;
}


function PlantImage({name}: plant) {
    return (
        <img 
            className = "plantImage"
            src= {getImageUrl(name)}
            alt= {name}
            height = {500}
            width = {500}
        />
    )
}

function PlantText({name}: plant) {
    return (
        <p text-sm = "true">
            {getText(name)}
        </p>
    )
}

function PlantHeading({name}: plant) {
    return (
        <h1 text-xl = "true" className = "plantHeading">
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

