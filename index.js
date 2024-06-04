const container = document.querySelector(".container");

for(let i = 0; i < (16 * 16); i++){
    const div = document.createElement("div");
    container.appendChild(div);
    div.setAttribute("style", "color: black; background: green; height: 16px; width: 16px");
}


//div.textContent = "this is some stuff";





//div.setAttribute("style", "color: black; background: green; height: 16px; width: 16px");

//div.classList.add("content");
