var op=document.querySelector("input");
op.value="0";
var flag=0;
var equ = "";

var box=document.querySelector("input");
var calc=document.querySelector(".calculator");
var body=document.querySelector("body");
var icon=document.querySelector(".switch");
var inn=document.querySelector("input");
var AC=document.querySelector(".AC");
var DE=document.querySelector(".DE");
var equal=document.querySelector(".equal");
var btns=document.querySelectorAll(".num");
var syms=document.querySelectorAll(".sym");

icon.addEventListener("click", ()=>{
    if(flag==1){
        icon.src="images/moon.png";
        flag=0;
        body.classList.remove("dark");
        
        // box.type="password";
        
    }else{
        icon.src="images/sunny.png";
        body.classList.add("dark");
        flag=1;
        // box.type="text";
    }
})

inn.addEventListener("input", () => {
    equ=op.value;
    
    });
inn.addEventListener("change", evaluate);
AC.addEventListener("click", allclear );
DE.addEventListener("click", del );
equal.addEventListener("click", evaluate );

btns.forEach((btn) => {
    btn.addEventListener("click", write);
})

syms.forEach((sym) => {
    sym.addEventListener("click", write )
});

function allclear() {
    equ='';
    op.value='0';
    
}

function del() {
    if(equ.length <= 1){
        equ='';
        op.value='0';
    }else{
    equ = equ.toString().slice(0,-1);
    op.value=equ.toString();
    }
    
}

function write(){
    var charc= (this.innerHTML);

    if((charc == "+") || (charc == "-") || (charc == "*") || (charc == "/") || (charc == ".")){
        if((equ.length>0)){
        if ((equ.charAt(equ.length-1) == "+") || (equ.charAt(equ.length-1) == "-") || (equ.charAt(equ.length-1) == "*") || (equ.charAt(equ.length-1) == "/") || (equ.charAt(equ.length-1) == ".")){
            equ=equ.slice(0,-1);
            equ+=charc;
            op.value = equ;
        }
        else{
            equ +=charc;
            op.value = equ;
        }}
    }
    else{
    equ +=charc;
    op.value = equ;
    }
    
}


function evaluate(){
    if(equ){
        equ=eval(equ);
        op.value=equ;
    }
    
}