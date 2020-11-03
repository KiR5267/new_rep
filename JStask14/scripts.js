document.querySelector('html').setAttribute('lang', 'en');

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');
document.head.appendChild(metaUtf8);


let name1 = document.createElement('meta');
name1.setAttribute('name', 'author',
    name1.setAttribute('content', 'kirill maslov'));
document.head.appendChild(name1);


let title = document.createElement('title');
title.innerHTML = 'js';
document.head.appendChild(title);



//let links = document.createElement('link');



//let links1 = document.createElement('link');



//let links2 = document.createElement('link');