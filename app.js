console.log("Javascipt Code has been added");

let first, second;

function checker(num1,num2){
    console.log("Checker Function has been clicked");

    first = parseFloat(document.getElementById("first_number").value);
    second = parseFloat(document.getElementById("second_number").value);

    // check if the input is valid or not
    if(isNaN(first) || isNaN(second)){  
        document.getElementById("first_number").value = " ";
        document.getElementById("second_number").value = " ";
        document.getElementById("result").value = " ";
        alert("Invalid input");
    }
}

function add(){
    console.log("add function clicked");
    checker();
    console.log(first);
    console.log(second);

    const result = parseFloat(first + second);
    
    document.getElementById("result").value = result;
}

function minus(){
    console.log("Minus function clicked");
    checker();
    console.log(first);
    console.log(second);

    const result = parseFloat(first-second);

    document.getElementById("result").value = result;
}

function multiplication(){
    console.log("multiplication function clicked");
    checker();
    console.log(first);
    console.log(second);

    const result = parseFloat(first * second);

    document.getElementById("result").value = result;
}

function divison(){
    console.log("divison function clicked");
    checker();
    console.log(first);
    console.log(second);

    const result=parseFloat(first/second);

    document.getElementById("result").value = result;
}

function clear_all(){
    console.log("Clear has been clicked");

    document.getElementById("first_number").value = "";
    document.getElementById("second_number").value = "";
    document.getElementById("result").value = "";
}
 
