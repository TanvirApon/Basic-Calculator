console.log("Javascipt Code has been added");
    

function checker(first,second){

    console.log("Checker Function has been clicked");

    // check if the input is valid or not
    if(isNaN(first) || isNaN(second)){  
        document.getElementById("f_number").value=" ";
        document.getElementById("s_number").value=" ";
        document.getElementById("result").value=" ";
        alert("Invalid input");
    }
 
}


function add(){
    
    console.log("add function clicked");

    const first=parseFloat(document.getElementById("f_number").value);
    const second=parseFloat(document.getElementById("s_number").value);

    checker(first,second);

    const result=parseFloat(first+second);

    document.getElementById("result").value=result;
}


function minus(){
     
    console.log("Minus function clicked");
    const first=parseFloat(document.getElementById("f_number").value);
    const second=parseFloat(document.getElementById("s_number").value);

    checker(first,second);

    const result=parseFloat(first-second);

    document.getElementById("result").value=result;
 
}


function multiplication(){
     
    console.log("mul function clicked");

    const first=parseFloat(document.getElementById("f_number").value);
    const second=parseFloat(document.getElementById("s_number").value);

    checker(first,second);

    const result=parseFloat(first*second);

    document.getElementById("result").value=result;
}

function divison(){
     
    console.log("divison function clicked");

    const first=parseFloat(document.getElementById("f_number").value);
    const second=parseFloat(document.getElementById("s_number").value);

    checker(first,second);

    const result=parseFloat(first/second);

    document.getElementById("result").value=result;
 
}
 


function clear_all(){
    console.log("Clear has been clicked");

    document.getElementById("f_number").value=" ";
    document.getElementById("s_number").value=" ";
    document.getElementById("result").value=" ";
}
 
