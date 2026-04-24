let pantalla = document.querySelector(".label");
let botones = document.querySelectorAll(".btn");
let botonClear = document.querySelector(".c");



botones.forEach (boton =>{
  boton.addEventListener("click", () => {

    const botonPrecionado = boton.textContent;

    
    //reset
    if(boton.textContent == "C"){
      pantalla.textContent = "0";
      
      return;
    }

    //operaciones
        if(boton.id === "igual"){
      pantalla.textContent = eval(pantalla.textContent);
      return;

    }

    //borrar
    if(boton.id === "borrar"){
      pantalla.textContent = pantalla.textContent.slice(0,-1);
      return;
    }
    
    //btn 0 
    if(pantalla.textContent === "0"){
        pantalla.textContent = botonPrecionado; //7
    }
    else{
      pantalla.textContent += botonPrecionado // 7 + 7

    }
  })
})


