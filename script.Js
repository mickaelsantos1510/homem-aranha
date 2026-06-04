 { 
 alert("Bem-vindo ao multiversso 🕷️");
}


document.addEventListener("DOMContentLoaded", function(){

    const btn = document.getElementById("darkModeBtn");

    // mantém ativo ao mudar de página
    if(localStorage.getItem("darkMode") === "on"){
        document.body.classList.add("dark-mode");
    }

    if(btn){
        btn.addEventListener("click", function(){

            document.body.classList.toggle("dark-mode");

            if(document.body.classList.contains("dark-mode")){
                localStorage.setItem("darkMode", "on");
            } else {
                localStorage.setItem("darkMode", "off");
            }

        });
    }

});

const btnTopo = document.getElementById("btnTopo");

window.addEventListener("scroll", function(){

    if (document.documentElement.scrollTop > 200){
        btnTopo.style.display = "block";
    } 
    else{
        btnTopo.style.display = "none";
    }

});

btnTopo.addEventListener("click", function(){

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});