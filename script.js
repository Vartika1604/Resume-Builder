function addNewField1() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.setAttribute('rows', 3);
    newNode.setAttribute('placeholder',"Enter Here" );
    newNode.classList.add('mt-2');
    let weOb = document.getElementById('we');
    let weAddButtonOb = document.getElementById('weAddButton');
    weOb.insertBefore(newNode, weAddButtonOb);
}
function addNewaqField(){
    let newnode=document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add("aqlfield");
    newnode.setAttribute("placeholder","Enter text here");
    newnode.classList.add("mt-2");
    newnode.setAttribute("rows",3);
    let aqOb=document.getElementById("aq");
    let qualbuttonOb=document.getElementById("qualButton");
    aqOb.insertBefore(newnode,qualbuttonOb);
}
function generateCV(){

   document.getElementById("namet").innerHTML=document.getElementById("nameField").value;
   document.getElementById("contactt").innerHTML=document.getElementById("contactField").value;
   document.getElementById("addresst").innerHTML=document.getElementById("addressField").value;
   document.getElementById("linkedint").innerHTML=document.getElementById("linkedinField").value;
   document.getElementById("githubt").innerHTML=document.getElementById("githubField").value;
   document.getElementById("projectt").innerHTML=document.getElementById("projectField").value;
   document.getElementById("objectivet").innerHTML=document.getElementById("objectiveField").value;
   //work exp
   let workExps = document.getElementsByClassName('weField'); //getting obj of weField
   let str = ''

   for(let e of workExps) {
       str = str + `<li> ${e.value} </li>`
   }
   document.getElementById('weT').innerHTML = str;
   let edu = document.getElementsByClassName('aqlfield'); //getting obj of weField
   let str2 = ''

   for(let e of edu) {
       str2 = str2 + `<li> ${e.value} </li>`
   }
   document.getElementById('edT').innerHTML = str2;


   
}