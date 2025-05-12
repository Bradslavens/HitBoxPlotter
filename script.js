document.getElementById('image-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.getElementById('uploaded-image');
            img.src = e.target.result;
            img.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('uploaded-image').addEventListener('click', function(event) {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const coordinatesList = document.getElementById('coordinates-list');
    const listItem = document.createElement('li');
    listItem.textContent = `X: ${x}, Y: ${y}`;
    coordinatesList.appendChild(listItem);
});
