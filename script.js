document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('file-input');
    const imageGallery = document.getElementById('image-gallery');

    // Function to handle file input change
    fileInput.addEventListener('change', function (event) {
        const files = event.target.files;
        if (files.length === 0) return;
        Array.from(files).forEach(file => {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const thumbnail = document.createElement('img');
                    thumbnail.classList.add('thumbnail');
                    thumbnail.src = e.target.result;
                    thumbnail.addEventListener('click', function () {
                        // Open full-size image in a new tab or modal
                        window.open(thumbnail.src, '_blank');
                    });
                    imageGallery.appendChild(thumbnail);
                };
                reader.readAsDataURL(file);
            }
        });
    });
});
