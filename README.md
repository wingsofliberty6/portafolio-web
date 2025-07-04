<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" 
    rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" 
    crossorigin="anonymous">
    <link rel="stylesheet" href="Styles.css">
    <title>Portafolio Alejandro Orué</title>
    <style>
        
        .nav-tabs .nav-link.active {
        background-color: goldenrod !important;
        color: #212529 !important;
        border-color:#212529;
        }

        .nav-tabs .nav-link {
        background-color: #212529!important;
        color: goldenrod !important;
        border-color: #212529;
        }

        .tab-content {
        height: 900px; /* Ajusta al tamaño de tu contenido */
        position: relative;
        }

        .slide-pane {
        position: absolute;
        top: 0;
        left: 100%;
        width: 100%;
        transition: all 0.5s ease-in-out;
        opacity: 0;
        z-index: 0;
        }

        .slide-pane.active {
        left: 0;
        opacity: 1;
        z-index: 1;
        }
    </style>
</head>
<body>
    <header>
        <div class="d-flex pt-4 align-items-center justify-content-center bg-black text-light">
            <h4 style="color: darkgoldenrod">Portafolio Web y CV</h4>
        </div>
    </header>
    <main>
        <div class="banner container-fluid bg-black d-flex justify-content-center align-items-center"
        style="height: 80px;">
            <h1 class='text-gray-100 m-0 px-3' style='font-size: 2rem;'>
                SUEÑA · SUEÑA · SUEÑA · SUEÑA · SUEÑA · SUEÑA · SUEÑA · SUEÑA · SUEÑA 
            </h1>
        </div>

        <div class="banner align-items-center justify-content-center bg-dark">
            <img class="opacity-75" 
            style="max-width:100%; height: auto;" 
            src="../image/back-image1.jpg">
        </div>

        <div class="cuerpo fluid align-items-center">
            <div class="Titular d-flex flex-row justify-content-center align-items-center my-4 bg-gray-100">
                <div class="d-flex flex-column px-3 mx-5">

                    <img class="mx-5" 
                    style="max-width:220px; height: auto;" 
                    src="../image/Alejandro.jpg">
                </div>
                <div class="d-flex flex-column justify-content-center align-items-center text-secondary mx-5">

                    <h1 class="mb-5" style="font-size:60px; color: darkgoldenrod">Alejandro Orué</h1>
                    <h1 style="font-size:20px">Estudiante de Multimedia y Animación Digital UANL</h1>
                    <h1 style="font-size:20px">Editor Multimedia · Desarrollador · Storyteller</h1>
                    <a class="btn btn-secondary btn-sm my-5 px-3 py-2" 
                        style="font-size:18px" 
                        href="CV Alejandro Orué.pdf" 
                        download>
                        Descargar CV
                    </a>
                </div>
            </div>
            
        </div>
        <!--ACERCA DE MI-->
        <div class="seccion-about-me position-relative container-fluid py-5 text-light bg-dark"
            style="background-image: url('../image/back-image.jpg'); background-size: cover; background-position: center;">
            <!-- Overlay oscuro -->
            <div class="position-absolute top-0 start-0 w-100 h-100" style="background-color: rgba(0, 0, 0, 0.65);"></div>
            <div class="position-relative row align-items-center justify-content-center m-3">
                <div class="col-md-5 text-center text-md-start ms-2 mb-4 mb-md-0">
                    <h1 class="display-3 fw-bold text-warning">ACERCA DE MÍ</h1>
                </div>
                <div class="col-12 col-md-6 ms-md-5">
                    <p>¡Hola! Soy estudiante de la Licenciatura en Multimedia y Animación Digital en la UANL. 
                    Desde que era muy joven, descubrí mi pasión por la edición audiovisual.</p>

                    <p>Me fascinaba la forma en que podía contar historias y transmitir emociones a través
                    del poder de la imagen y el sonido.</p>

                    <p>Con el tiempo, mi curiosidad me llevó a explorar el mundo del Marketing de Contenidos. 
                    Fue entonces cuando me di cuenta de las posibilidades que surgían al combinar mis habilidades 
                    en edición audiovisual con las estrategias de marketing en línea. 
                    Ahora, estoy emocionado de seguir explorando esta fascinante intersección y descubrir
                    nuevas formas de cautivar a la audiencia y lograr resultados impactantes.</p>
                </div>
            </div>
        </div>
        <!--MENU DE NAVEGACIÓN-->
        <div class="container-fluid d-flex bg-dark text-light">
            <ul class="nav nav-tabs" id="tabMenu" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link bg-gray-100 active" id="tab1-tab" data-bs-toggle="tab" data-bs-target="#tab1" type="button" role="tab"><h5>VIDEOS</h5></button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link bg-gray-100" id="tab2-tab" data-bs-toggle="tab" data-bs-target="#tab2" type="button" role="tab"><h5>FOTOS</h5></button>
                </li>
            </ul>
        </div>
        <div class="tab-content position-relative overflow-hidden bg-dark pb-5" 
        style="background-image: url('../image/back-image.jpg'); background-size: cover; background-position: center;">
        <!-- Overlay oscuro -->
            <div class="position-absolute top-0 start-0 w-100 h-100" style="background-color: rgba(0, 0, 0, 0.65);"></div> 
                <!-- Tab 1: Videos -->
                <div class="tab-pane slide-pane active" id="tab1" role="tabpanel">
                    <div class="video-gallery container-fluid pt-4">    
                        <div class="row justify-content-center mb-1">
                            <div class="col-md-8 text-center mb-2">
                                <h1 class="display-3 fw-bold text-warning">CARRETE DE VIDEOS</h1>
                            </div>
                        </div>
                        <!-- CONTENEDOR PRINCIPAL -->
                        <div class="container d-flex flex-row my-5 me-2">
                            <!-- Tira de videos (miniaturas) -->
                            <div class="d-flex flex-column overflow-auto gap-2 p-4 bg-light rounded-2">
                                <!-- Miniatura 1 -->
                                <div class="d-flex flex-row align-items-left">
                                    <video class="video-thumb me-2" src="../video/LEMNOS_ISLAND.mp4" width="150" onclick="changeVideo(this.src)"></video>
                                    <div class="d-flex flex-column mt-2">
                                        <h5 style="color: darkgoldenrod">LEMNOS ISLAND</h5>
                                        <p>Cortometraje</p>
                                    </div>   
                                </div>
                                <!-- Miniatura 2 -->
                                <div class="d-flex flex-row align-items-left">
                                    <video class="video-thumb me-2" src="../video/REN.mp4" width="150" onclick="changeVideo(this.src)"></video>
                                    <div class="d-flex flex-column mt-2">
                                        <h5 style="color: darkgoldenrod">REN</h5>
                                        <p>Cortometraje</p>
                                    </div>    
                                </div>
                                <!-- Miniatura 3 -->
                                <div class="d-flex flex-row align-items-left">
                                    <video class="video-thumb me-2" src="../video/DEMO_REEL_2019.mp4" width="150" onclick="changeVideo(this.src)"></video>
                                    <div class="d-flex flex-column mt-2">
                                        <h5 style="color: darkgoldenrod">DEMO REEL 2021</h5>
                                        <p>Portafolio</p>
                                    </div>   
                                </div>
                                <!-- Miniatura 4 -->
                                <div class="d-flex flex-row align-items-left">
                                    <video class="video-thumb me-2" src="../video/SRA_JUANI.mp4" width="150" onclick="changeVideo(this.src)"></video>
                                    <div class="d-flex flex-column mt-2">
                                        <h5 style="color: darkgoldenrod">TESTIMONIAL ETERNAL</h5>
                                        <p>Video Testimonial</p>
                                    </div>   
                                </div>
                                <!-- Miniatura 5 -->
                                <div class="d-flex flex-row align-items-left">
                                    <video class="video-thumb me-2" src="../video/PROTACTIC_M8_L4.mp4" width="150" onclick="changeVideo(this.src)"></video>
                                    <div class="d-flex flex-column mt-2">
                                        <h5 style="color: darkgoldenrod">PROTACTIC</h5>
                                        <p>Instruccional con Avatar</p>
                                    </div>   
                                </div>
                            </div>

                            <!-- Reproductor grande -->
                            <div class="ratio ratio-16x9 mb-4 mx-5" style="max-width: 650px; height: 100%;">
                                <video id="mainVideo" controls>
                                    <source src="videos/video1.mp4" type="video/mp4">
                                    Tu navegador no soporta video HTML5.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Tab 2 -->
                <div class="tab-pane slide-pane" id="tab2" role="tabpanel">
                    <p>Contenido de Tab 2</p>
                </div>
            </div>
        </div>
        
        <!--BANNER-->
        <div class="banner container-fluid bg-black d-flex justify-content-center align-items-center" style="height: 80px;">
            <h1 class='text-gray-100 m-0 px-3' style='font-size: 2rem;'>
                CREA · CREA · CREA · CREA · CREA · CREA · CREA · CREA · CREA · CREA · CREA
            </h1>
        </div>
    </main>
    <Footer>
        <div class="d-flex flex-row p-5 align-items-center bg-dark text-light">
            <div class="flex-fill text-align-left ms-3">
                <h5>DATOS DE CONTACTO</h5>
                <div class="mt-3 ms-3">
                    <p>Alejandro Orué</p>
                    <p>Tel: 81 2392 8523</p>
                    <a class="text-light" href="mailto: mikee1097@gmail.com">
                        Mail: mikee1097@gmail.com
                    </a>
                </div>
            </div>
            <div class="flex-fill text-center">
                <h5>Portafolio Web de Alejandro Orué</h5>
            </div>
        </div>
    </Footer>
    <script>
        function changeVideo(src) {
            const mainVideo = document.getElementById('mainVideo');
            mainVideo.src = src;
            mainVideo.load();
            mainVideo.play();
        }
    </script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
        const tabs = document.querySelectorAll('[data-bs-toggle="tab"]');
        const panes = document.querySelectorAll('.slide-pane');

            tabs.forEach(tab => {
                tab.addEventListener('click', e => {
                e.preventDefault();

                const targetId = tab.getAttribute('data-bs-target');
                const currentPane = document.querySelector('.slide-pane.active');
                const nextPane = document.querySelector(targetId);

                if (currentPane !== nextPane) {
                    // Ocultar el actual
                    currentPane.classList.remove('active');
                    // Mostrar el nuevo con animación
                    setTimeout(() => {
                    nextPane.classList.add('active');
                    }, 20); // pequeño delay para que el CSS transition funcione
                }

                
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                });
            });
        });
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>
