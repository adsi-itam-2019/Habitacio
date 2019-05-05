    /**

     * Array con las imagenes y enlaces que se iran mostrando en la web

     */

    var imagenes=new Array(

        ['imagenesSubirPropiedad/1.jpg'],

        ['imagenesSubirPropiedad/2.jpg'],

        ['imagenesSubirPropiedad/3.jpg'],

        ['imagenesSubirPropiedad/4.jpg']

    );

 

    /**

     * Funcion para cambiar la imagen y link

     */

    function rotarImagenes()

    {

        // obtenemos un numero aleatorio entre 0 y la cantidad de imagenes que hay

        var index=Math.floor((Math.random()*imagenes.length));

 

        // cambiamos la imagen

        document.getElementById("imagen").src=imagenes[index][0];

        

    }

 

    /**

     * Función que se ejecuta una vez cargada la página

     */

    onload=function()

    {

        // Cargamos una imagen aleatoria

        rotarImagenes();

 

        // Indicamos que cada 5 segundos cambie la imagen

        setInterval(rotarImagenes,5000);

    }
    function click_subir(){
        window.location='mispropiedades.html';
    }