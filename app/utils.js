import file from "./plant-text.json" assert {type: 'json'};
const myArr = new Map(Object.entries(file.plants));


export function getImageUrl(name) {
    return (
        '/' + name+ '.jpg'
    );
}

export function getText(name) {
    return (
        String(myArr.get(name))
    );
    console.log(myArr.get(name));
}