"use strict"

const btn = document.getElementById('copy');
btn.addEventListener('click', ()=>{
    let text = document.getElementById('copied');
    text.disabled = false;
    text.select();
    document.execCommand("copy");
    text.disabled = true;
})
