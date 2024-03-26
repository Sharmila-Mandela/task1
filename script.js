function addNewWEField(){
    
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder','enter here');
    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");
    weOb.insertBefore(newNode,weAddButtonOb);
  
  }
  function addNewAQField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder','enter here');
    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");
    aqOb.insertBefore(newNode,aqAddButtonOb);
  
  }
  function addNewSKField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('skField');
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder','enter here');
    let skOb=document.getElementById("sk");
    let skAddButtonOb=document.getElementById("skAddButton");
    skOb.insertBefore(newNode,skAddButtonOb);
  
  }
  function addNewACField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('acField');
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder','enter here');
    let acOb=document.getElementById("ac");
    let acAddButtonOb=document.getElementById("acAddButton");
    acOb.insertBefore(newNode,acAddButtonOb);
  
  }
  function addNewPJField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('pjField');
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder','enter here');
    let pjOb=document.getElementById("pj");
    let pjAddButtonOb=document.getElementById("pjAddButton");
    pjOb.insertBefore(newNode,pjAddButtonOb);
  
  }
  //generating cv
  function generateCV()
  {
    let nameField=document.getElementById("nameField").value;
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML=nameField;
    //direct
    document.getElementById("nameT2").innerHTML=nameField;
    //contact
    document.getElementById("contactT").innerHTML= document.getElementById("contactField").value;
  
    //address
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;
    //fb
  
   document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;
   //insta
   document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;
    
    //linked
    document.getElementById("LinkedT").innerHTML=document.getElementById("LinkedField").value;
    //objective
    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;
    //we
    let wes=document.getElementsByClassName("weField");
    let str="";
    for(let e of wes)
    {
      str= str +`<li>  ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML=str;
    //aq
    let  aqs=document.getElementsByClassName("aqField");
    let  str1="";
    for(let e of aqs)
    {
      str1 +=`<li>  ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML=str1;
    let  sks=document.getElementsByClassName("skField");
    let  str2="";
    for(let e of sks)
    {
      str2+=`<li>  ${e.value} </li>`;
    }
    document.getElementById("skT").innerHTML=str2;
    let  acs=document.getElementsByClassName("acField");
    let  str3="";
    for(let e of acs)
    {
      str3 +=`<li>  ${e.value} </li>`;
    }
    document.getElementById("acT").innerHTML=str3;
    let  pjs=document.getElementsByClassName("pjField");
    let  str4="";
    for(let e of pjs)
    {
      str4 +=`<li>  ${e.value} </li>`;
    }
    document.getElementById("pjT").innerHTML=str4;


    document.getElementById("cv-form").style.display="none";
  
  
    document.getElementById("cv-template").style.display="block";
  
  
  }
    //print cv
    function printCV(){
      window.print();
  
    }
  
  
  
  