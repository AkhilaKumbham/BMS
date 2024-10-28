document.addEventListener("DOMContentLoaded",function(){
    let height=document.getElementById("height");
    let weight=document.getElementById("weight");
    let button1=document.getElementById("button1");
    let output=document.getElementById("output");
     let condition=document.getElementById("condition");
    button1.addEventListener("click",()=>{
    let height1=height.value/100;
    if (!isNaN(height1) && !isNaN(weight.value) && height1 > 0) {
        const answer = weight.value/(height1 * height1);  
        output.value = answer.toFixed(2);
    }
     else {
        output.value = "Invalid input";
     }
     weightCondition()
    })
     function weightCondition(){
     if(output.value<18.5){
        condition.innerHTML="Underweight"
     }
    else if(output.value>=18.5 && output.value<=24.9){
        condition.innerHTML="Normal"
     }
     else if(output.value>=25.0 && output.value<=29.9){
        condition.innerHTML="Overweight"
     }
     else{
        condition.innerHTML="Obesity"
     }
    
    }
})