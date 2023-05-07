// let items = document.querySelector('.items');
// items.children[0].style.color = "red"


const btn=document.getElementById('btn');

function saveData(){

    localStorage.setItem('name',document.getElementById('name').value);
    localStorage.setItem('email',document.getElementById('email').value);
    
}

// btn.addEventListener("click",(e)=>{ 
//     e.preventDefault();
//     localStorage.setItem('name',document.getElementById('name').value);
//     localStorage.setItem('email',document.getElementById('email').value);

// });

btn.addEventListener("mouseover",(e)=>{
    e.preventDefault();
    console.log("");
});

btn.addEventListener("mouseout",(e)=>{
    e.preventDefault();
    console.log("");
});