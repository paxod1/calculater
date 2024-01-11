function buttonclick(val)
{
  document.getElementById("screen").value+=val;
}
function clearscreen(){
  document.getElementById("screen").value=""
} 
 let check
 let temp1
 let result
 let temp2
let simbol
function buttonaction(action){
        // temp1= document.getElementById("screen").value
       temp1 =Number(document.getElementById("screen").value)
       document.getElementById("screen").value=""
      check=action
       console.log(temp1);
}
function equalclick(){
    let sum=1+2;
    console.log(temp1)
    
     temp2= Number(document.getElementById("screen").value)
    // document.getElementById("screen").value=""
    // console.log(temp2)
    // console.log(check)
   console.log (typeof temp1)
    console.log(typeof temp2)
    if(check=="+"){
         result = temp1 + temp2;
        document.getElementById("screen").value=result; 
        console.log(result)
    }else if(check=='-'){
         result= temp1-temp2;
        document.getElementById("screen").value=result;
    }else if(check=='*'){
        result= temp1*temp2;
        document.getElementById("screen").value=result; 
    }else if(check=='/'){
        result= temp1/temp2;
        document.getElementById("screen").value=result;  
    }
    
}
