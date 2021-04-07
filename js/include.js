const d=document;

d.addEventListener("DOMContentLoaded", (e) => {
    const incluirHTML = (elemento, url) => {

        const xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", evento => {
            if(xhr.readyState!==4)return;

            if(xhr.status >= 200 && xhr.status < 300){
                elemento.outerHTML= xhr.responseText; //asignando la respuesta de la petición al contenido otuterHTML

            }else{
                let message = xhr.statusText || "Ocurrió un error, verifica que estés haciendo la petición por HTTP o HTTPS";
                elemento.outerHTML = `<div><p>Error ${xhr.status}: ${message}</p></div>`;
            }   
        });

        xhr.open("GET", url);
        xhr.setRequestHeader("content-type", "text/html; charset=utf-8");
        xhr.send();
    };
    
    document
    .querySelectorAll("[data-include]")
    .forEach(elemento => incluirHTML(elemento, elemento.getAttribute("data-include")));
});