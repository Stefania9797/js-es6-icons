let icons=[
	{name: 'cat', prefix: 'fa-',type: 'animal', family: 'fas'},
	{name: 'crow',prefix: 'fa-',type: 'animal',family: 'fas'},
	{name: 'dog',prefix: 'fa-',type: 'animal',family: 'fas'},
	{name: 'dove',prefix: 'fa-',type: 'animal',family: 'fas'},
	{name: 'dragon',prefix: 'fa-',type: 'animal',family: 'fas'},
	{name: 'horse',prefix: 'fa-',type: 'animal',family: 'fas'},
	{name: 'hippo',prefix: 'fa-',type: 'animal',family: 'fas'},
	{name: 'fish',prefix: 'fa-',type: 'animal',family: 'fas'},
	{name: 'carrot',prefix: 'fa-',type: 'vegetable',family: 'fas'},
	{name: 'apple-alt',prefix: 'fa-',type: 'vegetable',family: 'fas'},
	{name: 'lemon',prefix: 'fa-',type: 'vegetable',family: 'fas'},
	{name: 'pepper-hot',prefix: 'fa-',type: 'vegetable',family: 'fas'},
	{name: 'user-astronaut',prefix: 'fa-',type: 'user',family: 'fas'},
	{name: 'user-graduate',prefix: 'fa-',type: 'user',family: 'fas'},
	{name: 'user-ninja',prefix: 'fa-',type: 'user',family: 'fas'},
	{name: 'user-secret',prefix: 'fa-',type: 'user',family: 'fas'}
];
/*Milestone 1:
Mostriamo in pagina tutte le icone disponibili come da layout.*/
printIcons()
function printIcons(){
    document.getElementById("container").innerHTML="";
    icons.forEach((icon)=>{
    //Milestone 2 Coloriamo le icone per tipo
    if(icon.type=="user"){
        icon.color="purple"
    }else if(icon.type=="vegetable"){
        icon.color="orange"
    }else{
        icon.color="blue"
    }
    //Milestone 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone
    let selectValue=document.getElementById("icon-type").value
    if(selectValue==icon.type || selectValue=="all"){
        document.getElementById("container").insertAdjacentHTML("beforeend",`
    <div id="icon">
    <i class="${icon.family} ${icon.prefix}${icon.name}" style="color:${icon.color}"></i>
    <h4>${icon.name}</h4>
    </div>`)
    }
})
}
document.getElementById("icon-type").addEventListener("change",printIcons)