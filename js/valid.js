const btn=document.getElementsByClassName("btn");
const txt=document.getElementById("text");
//console.log(btn);
btn[0].addEventListener("click",function(){
    let val=txt.value;
    txt.innerText=val+"1";
});

btn[1].addEventListener("click",function(){
    let val=txt.value;
    txt.innerText=val+"2";
});
btn[2].addEventListener("click",function(){
    let val=txt.value;
    txt.innerText=val+"3";
});
btn[3].addEventListener("click",function(){
    let val=txt.value;
    txt.innerText=val+"4";
});
btn[4].addEventListener("click",function(){
    let val=txt.value;
    txt.innerText=val+"*";
});
btn[5].addEventListener("click",function(){
    let val=txt.value;
    txt.innerText=val+"5";
});
btn[6].addEventListener("click",function(){
    let val=txt.value;
    txt.innerText=val+"6";
});
btn[7].addEventListener("click",function(){
    let val=txt.value;
    txt.innerText=val+"7";
});
btn[8].addEventListener("click",function(){
    let val=txt.value;
    txt.innerText=val+"8";
});
btn[9].addEventListener("click",function(){
    let val=txt.value;
    txt.innerText=val+"/";
});
btn[10].addEventListener("click",function(){
    let val=txt.value;
    txt.innerText=val+"9";
});
btn[11].addEventListener("click",function(){
    let val=txt.value;
    txt.innerText=val+"0";
});
btn[12].addEventListener("click",function(){
    let val=txt.value;
    txt.innerText=val+"+";
});
btn[13].addEventListener("click",function(){
    let val=txt.value;
    txt.innerText=val+"-";
});
btn[14].addEventListener("click",function(){
    let val=txt.value;
    let ans=eval(val);
    txt.innerText=ans;
});
btn[15].addEventListener("click",function(){
    txt.innerText="";
});