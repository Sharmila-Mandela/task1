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

// Generating CV with Validation
function generateCV() {
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = nameField;

    document.getElementById("nameT2").innerHTML = nameField;
    
    let contact = document.getElementById("contactField").value;
    let email = document.getElementById("emailField").value;

    // Email validation
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Phone validation (10 digits)
    let phonePattern =/^[0-9]{10}$/ ;
    if (!phonePattern.test(contact)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    document.getElementById("contactT").innerHTML = contact;
    document.getElementById("emailT").innerHTML = email;

    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;
    document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;
    document.getElementById("LinkedT").innerHTML = document.getElementById("LinkedField").value;
    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

    let wes = document.getElementsByClassName("weField");
    let str = "";
    for (let e of wes) {
        str += `<li>${e.value}</li>`;
    }
    document.getElementById("weT").innerHTML = str;

    let aqs = document.getElementsByClassName("aqField");
    let str1 = "";
    for (let e of aqs) {
        str1 += `<li>${e.value}</li>`;
    }
    document.getElementById("aqT").innerHTML = str1;

    let sks = document.getElementsByClassName("skField");
    let str2 = "";
    for (let e of sks) {
        str2 += `<li>${e.value}</li>`;
    }
    document.getElementById("skT").innerHTML = str2;

    let acs = document.getElementsByClassName("acField");
    let str3 = "";
    for (let e of acs) {
        str3 += `<li>${e.value}</li>`;
    }
    document.getElementById("acT").innerHTML = str3;

    let pjs = document.getElementsByClassName("pjField");
    let str4 = "";
    for (let e of pjs) {
        str4 += `<li>${e.value}</li>`;
    }
    document.getElementById("pjT").innerHTML = str4;

    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
}

// Print CV
function printCV() {
    window.print();
}
