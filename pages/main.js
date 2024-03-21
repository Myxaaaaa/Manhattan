document.addEventListener('DOMContentLoaded', function () {
    const mainImages = document.querySelectorAll('.image_container img');

    mainImages.forEach(image => {
        image.addEventListener('click', () => {
            const enlargedImage = image.cloneNode(true);

            const fullscreenContainer = document.createElement('div');
            fullscreenContainer.classList.add('fullscreen-container');

            const closeBtn = document.createElement('span');
            closeBtn.innerHTML = '&times;';
            closeBtn.classList.add('close-btn');
            closeBtn.addEventListener('click', () => {
                document.body.removeChild(fullscreenContainer);
            });

            fullscreenContainer.appendChild(closeBtn);
            fullscreenContainer.appendChild(enlargedImage);

            document.body.appendChild(fullscreenContainer);
        });
    });
});
