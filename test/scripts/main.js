if (!localStorage.getItem('name')){
    setName();
}else{
    document.querySelector('h1').textContent=localStorage.getItem('name');
}
document.querySelector('button').onclick=function(){
    setName();
}
function setName(){
    let ac=prompt('Tell me your name, bitch.');
    if (ac===null || !ac){
        setName();
    }else{
        localStorage.setItem('name', ac);
        document.querySelector('h1').textContent=ac;
    }
}