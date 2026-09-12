const botao = document.getElementById("orcamentoBotao");


// BOTÃO DE ORÇAMENTO

botao.addEventListener("click", function () {

    const numero = "5592991711541";

    const texto = encodeURIComponent(
        "Olá! Vi o site da Nextore3D e gostaria de solicitar um orçamento."
    );

    const link =
        "https://wa.me/" +
        numero +
        "?text=" +
        texto;

    window.location.href = link;

});


// ANIMAÇÕES AO ROLAR A PÁGINA

const elementos = document.querySelectorAll(".animar");

const observador = new IntersectionObserver(
    function (entradas) {

        entradas.forEach(function (entrada) {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("visivel");

            }

        });

    },
    {
        threshold: 0.15
    }
);


elementos.forEach(function (elemento) {

    observador.observe(elemento);

});