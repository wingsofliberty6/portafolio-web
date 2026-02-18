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

function changeVideo(src) {
    const mainVideo = document.getElementById('mainVideo');
    mainVideo.src = src;
    mainVideo.load();
    mainVideo.play();
}

function changeVideo(videoId) {
    const iframe = document.getElementById('modalVideoFrame');
    const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    
    // Asignamos la URL al iframe del modal
    iframe.src = videoUrl;

    // Disparamos el modal de Bootstrap
    const myModal = new bootstrap.Modal(document.getElementById('videoModal'));
    myModal.show();

    // Limpieza: Cuando el modal se cierra, quitamos el src para que el video deje de sonar
    const modalElement = document.getElementById('videoModal');
    modalElement.addEventListener('hidden.bs.modal', function () {
        iframe.src = "";
    });
}

function openImageModal(src, title) {
    const modalImg = document.getElementById('modalImageDisplay');
    const modalTitle = document.getElementById('imageModalLabel');
    
    modalImg.src = src;
    modalTitle.innerText = title;

    const myModal = new bootstrap.Modal(document.getElementById('imageModal'));
    myModal.show();
}

function openDesignModal(imgSrc, title, description) {
    // Referencias a los elementos del modal
    const modalImg = document.getElementById('designModalImg');
    const modalTitle = document.getElementById('designModalTitle');
    const modalBody = document.getElementById('designModalBody');

    // Inyección de contenido
    modalImg.src = imgSrc;
    modalTitle.innerText = title;
    modalBody.innerHTML = description; // Usamos innerHTML por si quieres poner negritas o saltos de línea

    // Mostrar el modal
    const myModal = new bootstrap.Modal(document.getElementById('designModal'));
    myModal.show();
}