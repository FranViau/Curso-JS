"use strict"
$(document).ready(function() {

   
    if(window.location.href.indexOf("index") > -1){ // ESto es para que solo lo cargue si esta en el index, si es -1 es que no lo encuentra

         // SLIDER
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true,
        });

        // POSTS
        var posts = [
            {
                title: "Prueba de título 1",
                date: "Publicado el día "+ moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac ligula orci. Nulla nec congue justo, a imperdiet ipsum. Cras pharetra est sed aliquam feugiat Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam justo erat,luctus non ligula in, venenatis dapibus metus. Pellentesque accumsan dictum libero,eu accumsan neque dapibus vehicula. Fusce nibh ipsum, bibendum tincidunt ex sed, fermentum feugiat diam. Vivamus sagittis quis dolor ut sollicitudin. Vivamus orci magna, ornare eget nulla eu, egestas aliquet est. Vestibulum id dolor nibh. Maurisvel lobortis odio. Nunc magna est, tempus in lobortis ut, efficitur quis tortor. Curabitur aliquam nunc et porta tristique."
            },
            {
                title: "Prueba de título 2",
                date: "Publicado el día "+ moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac ligula orci. Nulla nec congue justo, a imperdiet ipsum. Cras pharetra est sed aliquam feugiat Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam justo erat,luctus non ligula in, venenatis dapibus metus. Pellentesque accumsan dictum libero,eu accumsan neque dapibus vehicula. Fusce nibh ipsum, bibendum tincidunt ex sed, fermentum feugiat diam. Vivamus sagittis quis dolor ut sollicitudin. Vivamus orci magna, ornare eget nulla eu, egestas aliquet est. Vestibulum id dolor nibh. Maurisvel lobortis odio. Nunc magna est, tempus in lobortis ut, efficitur quis tortor. Curabitur aliquam nunc et porta tristique."
            },
            {
                title: "Prueba de título 3",
                date: "Publicado el día "+ moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac ligula orci. Nulla nec congue justo, a imperdiet ipsum. Cras pharetra est sed aliquam feugiat Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam justo erat,luctus non ligula in, venenatis dapibus metus. Pellentesque accumsan dictum libero,eu accumsan neque dapibus vehicula. Fusce nibh ipsum, bibendum tincidunt ex sed, fermentum feugiat diam. Vivamus sagittis quis dolor ut sollicitudin. Vivamus orci magna, ornare eget nulla eu, egestas aliquet est. Vestibulum id dolor nibh. Maurisvel lobortis odio. Nunc magna est, tempus in lobortis ut, efficitur quis tortor. Curabitur aliquam nunc et porta tristique."
            },
            {
                title: "Prueba de título 4",
                date: "Publicado el día "+ moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac ligula orci. Nulla nec congue justo, a imperdiet ipsum. Cras pharetra est sed aliquam feugiat Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam justo erat,luctus non ligula in, venenatis dapibus metus. Pellentesque accumsan dictum libero,eu accumsan neque dapibus vehicula. Fusce nibh ipsum, bibendum tincidunt ex sed, fermentum feugiat diam. Vivamus sagittis quis dolor ut sollicitudin. Vivamus orci magna, ornare eget nulla eu, egestas aliquet est. Vestibulum id dolor nibh. Maurisvel lobortis odio. Nunc magna est, tempus in lobortis ut, efficitur quis tortor. Curabitur aliquam nunc et porta tristique."
            },
            {
                title: "Prueba de título 5",
                date: "Publicado el día "+ moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac ligula orci. Nulla nec congue justo, a imperdiet ipsum. Cras pharetra est sed aliquam feugiat Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam justo erat,luctus non ligula in, venenatis dapibus metus. Pellentesque accumsan dictum libero,eu accumsan neque dapibus vehicula. Fusce nibh ipsum, bibendum tincidunt ex sed, fermentum feugiat diam. Vivamus sagittis quis dolor ut sollicitudin. Vivamus orci magna, ornare eget nulla eu, egestas aliquet est. Vestibulum id dolor nibh. Maurisvel lobortis odio. Nunc magna est, tempus in lobortis ut, efficitur quis tortor. Curabitur aliquam nunc et porta tristique."
            },
        ];
        posts.forEach((item, i) =>{
            var post = `
            <article class = "post">
            <h2>${item.title}</h2>
            <span class="fecha">${item.date}</span>
            <p>${item.content}</p>
            <a href="#" class="boton-mas">Leer más</a>
        </article>
            `;
            var posts = $("#posts");
            posts.append(post);
        });
    }
    

    

    // SELECTOR DE TEMAS
    var estilos = $("#tema")
    $("#aVerde").click(() =>{
        estilos.attr("href","css/verde.css");
    });
    $("#aRojo").click(() =>{
        estilos.attr("href","css/rojo.css");
    });
    $("#aAzul").click(() =>{
        estilos.attr("href","css/azul.css");
    });
    // Scroll hacia arriba en la web
    $(".subir").click(function(e){
        e.preventDefault(); // Para que el enlace no haga su funcion por defecto (redirigirnos a otra pagina  )
        $("html,body").animate({
            scrollTop:0
        },500);
        return false;
    });

    // LOGIN FALSO
    var login = $("#login");
    $("#login form").submit(function(){
        var formName = $("#formName").val();
        localStorage.setItem("Nombre",formName);
    });

    var formName = localStorage.getItem("Nombre");

    if(formName != null && formName != "undefined"){
        var aboutP = $("#about p");
        aboutP.html("<br><strong> Bienvenido, " + formName +"</strong>");
        aboutP.append("<a href='#' id='logout'>Cerrar Sesión</a>");
        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        }); 
    }

    // ABOUT
    if(window.location.href.indexOf("about") > -1){
        $("#acordeon").accordion();
    }
    
    // RELOJ
    if(window.location.href.indexOf("reloj") > -1){
        setInterval(() =>{
            $("#loading").hide();
            var reloj = moment().format("hh:mm:ss");
            $("#reloj").html(reloj);
        },1000);
        
    }
    
    // CONTACTO
    if(window.location.href.indexOf("contacto") > -1){

        $("#date").datepicker({
            dateFormat:"dd-mm-yy"
        });

        $.validate({
            lang: 'es',
            errorMessagePosition:"´bottom", // Esto es opcional, lo puse para mostrar que se puede cambiar
            scrollToTopOnError:false // Esto lo mismo
        });
    }
});