const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for (i = 1; i<6; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute("src", "images/pic"+ i +".jpg");
    /* this sets the src of the element "newImage" to the proper number */
    thumbBar.appendChild(newImage);
    newImage.onclick = function(i) {
        displayedImage.src = i.target.src;
  }
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function() {
    let btnClss = btn.getAttribute("class"); 
    if (btnClss === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    else {
        btn.setAttribute("class", "dark");
        btn.textContent = "darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
}
