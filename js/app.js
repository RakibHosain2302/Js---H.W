


// select

let btN = document. querySelector('.btN')
let heading = document. querySelector('h1')

function changeheading() {
   heading.innerHTML = 'I am a Black Boy'
}

btN.addEventListener('click', changeheading);


let backBtn = document. querySelector('.backBtn')


function backheading() {
   heading.innerHTML = 'I am Rakib Hosain'
}

backBtn.addEventListener('click', backheading);

// light on**

let Onbtn = document. querySelector('.Onbtn');

let img = document. querySelector('img')



function lightOn(){
    img.src = "./images/light1 (2).jpg"
}

Onbtn.addEventListener('click', lightOn )



// light off**


let Offbtn = document. querySelector('.Offbtn');


function lightoff(){
    img.src = "./images/light1 (1).jpg"
}

Offbtn.addEventListener('click', lightoff )