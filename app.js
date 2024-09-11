console.log("Javascipt Code has been added");
    

function checker(first,second){

    console.log("Checker Function has been clicked");

    if(isNaN(first) || isNaN(second))
        {  
            document.getElementById("fnumber").value=" ";
            document.getElementById("snumber").value=" ";
            document.getElementById("result").value=" ";
            alert("You have Used String instead of number!!!")
        }
}


function add(){
    
    console.log("add function clicked");

    const first=parseFloat(document.getElementById("fnumber").value);
    const second=parseFloat(document.getElementById("snumber").value);

    checker(first,second);

    const result=parseFloat(first+second);

    document.getElementById("result").value=result;
}


function minus(){
     
    console.log("Minus function clicked");
    const first=parseFloat(document.getElementById("fnumber").value);
    const second=parseFloat(document.getElementById("snumber").value);

    checker(first,second);

    const result=parseFloat(first-second);

    document.getElementById("result").value=result;
 
}


function mul(){
     
    console.log("mul function clicked");

    const first=parseFloatt(document.getElementById("fnumber").value);
    const second=parseFloat(document.getElementById("snumber").value);

    checker(first,second);

    const result=parseFloat(first*second);

    document.getElementById("result").value=result;
}

function divison(){
     
    console.log("divison function clicked");

    const first=parseFloat(document.getElementById("fnumber").value);
    const second=parseFloat(document.getElementById("snumber").value);

    checker(first,second);

    const result=parseFloat(first/second);

    document.getElementById("result").value=result;
 
}
 


function rem(){
    console.log("Clear has been clicked");

    document.getElementById("fnumber").value=" ";
    document.getElementById("snumber").value=" ";
    document.getElementById("result").value=" ";
}
 
