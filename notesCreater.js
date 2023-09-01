const input=document.getElementById("input");
const btn=document.getElementById("btn");
const resultcontainer=document.querySelector(".resultcontainer");
const heading=document.querySelector(".heading");

// console.log(input,btn,resultcontainer);


btn.addEventListener("click",()=>{
   
    if(input.value!=""){
        console.log(input.value);
        heading.innerHTML="";
        const result=document.createElement("div");
        const para=document.createElement("p");
        para.innerText=input.value;
       
        const delbtn=document.createElement("button");
        delbtn.innerHTML="delete Note";
        result.appendChild(para);
        result.appendChild(delbtn)
        result.classList.add("result");
        resultcontainer.appendChild(result);
    
       
        
        delbtn.addEventListener("click",()=>{
            // result.innerHTML=" ";
            delbtn.parentElement.remove();
        })
        input.value="";
    }else{
        heading.innerText="Please add Something which in your mind";
    }
    

});