function capitalize(str){
    const lower = str.toLowerCase()
    return str.charAt(0).toUpperCase() + lower.slice(1)
}
const fetchPokemon = () => {
const pokeNameInput = document.getElementById("pokeName");
let pokeName = pokeNameInput.value;
pokeName = pokeName.toLowerCase();
const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
fetch(url).then((res) => {
    if (res.status != "200") {
        console.log(res);
        pokeImage("./pokemon-sad.gif")
    }
    else {
        return res.json();
    }
}).then((data) => {
    if (data) {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        let pokeType = data.types;
        let pokeStat = data.stats;
        let name = data.name;
        let moves = data.moves;
        pokeImage(pokeImg);
        pokeTypes(pokeType)
        pokeStats(pokeStat);
        pokeNameSet(name);
        pokeMoves(moves);
        console.log(pokeType);
    }
});
}
const pokeNameSet = (name) => {
const pokePhoto = document.getElementById("pokeNameH4");
pokePhoto.innerHTML = capitalize(name);
}
const pokeImage = (url) => {
const pokePhoto = document.getElementById("pokeImg");
pokePhoto.src = url;
}
const pokeTypes = (array) => {
const pokeTypesDiv = document.getElementById("pokeType")
pokeTypesDiv.innerHTML = "TIPO:"
array.forEach(element =>{
    var typeSpan = document.createElement('span')
    typeSpan.innerHTML = element.type.name.toUpperCase();
    pokeTypesDiv.append(typeSpan)
});

}
const pokeMoves = (array) => {
const pokeTypesDiv = document.getElementById("pokeMoves")
pokeTypesDiv.innerHTML = ""
array.forEach(element =>{
    var typeSpan = document.createElement('span')
    typeSpan.innerHTML = element.move.name.replace("-", " ").toUpperCase();
    pokeTypesDiv.append(typeSpan)
});

}
const pokeStats = (array) => {
const pokeStatHP = document.getElementById("stats1")
const pokeStatAttack = document.getElementById("stats2")
const pokeStatDefense = document.getElementById("stats3")
const pokeStatSPAttack = document.getElementById("stats4")
const pokeStatSPDefense = document.getElementById("stats5")
const pokeStatSpeed = document.getElementById("stats6")

array.forEach(element =>{
    let stat = element.stat.name;
    let height = (element.base_stat * 25) / 100
    console.log("height" + height + " stat " + stat)
    switch(stat){
        case 'hp':{
            pokeStatHP.style.height = height+"px"
            
        }break;
        case 'attack':{
            pokeStatAttack.style.height = height+"px"
            
        }break;
        case 'defense':{
            pokeStatDefense.style.height = height+"px"
            
        }break;
        case 'special-attack':{
            pokeStatSPAttack.style.height = height+"px"
            
        }break;
        case 'special-defense':{
            pokeStatSPDefense.style.height = height+"px"
            
        }break;
        case 'speed':{
            pokeStatSpeed.style.height = height+"px"
            
        }break;
    }
});


}