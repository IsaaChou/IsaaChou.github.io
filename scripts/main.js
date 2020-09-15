var count=0;
if (!localStorage.getItem('name')){
    setName();
}else{
    document.querySelector('h1').textContent='Welcome, '+localStorage.getItem('name');
}
document.querySelector('#namer').onclick=function(){
    setName();
}
document.querySelector('#doge').onclick=function(){
    setDoge();
}
function setName(){
    let ac=prompt('Tell me your name, bitch.');
    if (ac===null || !ac){
        setName();
    }else{
        localStorage.setItem('name', ac);
        document.querySelector('h1').textContent='Welcome'+ac;
    }
}
function setDoge(){
    count=count+1;
    document.querySelector('#little_bitch').textContent='You have click the doge'+count.toString()+"times";
}