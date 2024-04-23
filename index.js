import { obtenerPersonaje } from "./utils.js";

const render = async () => {
  const response = await obtenerPersonaje();
  console.log(response);

  const personajes = document.querySelector(".personajes");
  for (const personaje of response) {
    
    const contenedor = document.createElement("div");
    contenedor.classList.add("contenedor");

    const left = document.createElement("div");
    left.classList.add("left");
    contenedor.appendChild(left);

    const displayImg = document.createElement("img");
    displayImg.src = personaje.displayIcon;
    left.appendChild(displayImg);

    const right = document.createElement("div");
    right.classList.add("right");
    contenedor.appendChild(right);

    const displayName = document.createElement("h2");
    displayName.textContent = personaje.displayName;
    right.appendChild(displayName);

    const description = document.createElement("p");
    description.textContent = personaje.description;
    right.appendChild(description);

    const btnDiv = document.createElement("div");
    btnDiv.classList.add("btnDiv");
    right.appendChild(btnDiv);

    const button = document.createElement("button");
    button.classList.add("btn");
    button.textContent = "Ver información detallada";
    btnDiv.appendChild(button); 

    button.addEventListener("click", () => {
      window.location.href = `./personajes.html?id=${personaje.uuid}`;  
    });

    const trash = document.createElement("i");
    trash.classList.add("fas", "fa-trash", "fa-3x");
    btnDiv.appendChild(trash);

    personajes.appendChild(contenedor);
  }
};

document.addEventListener("DOMContentLoaded", render);
