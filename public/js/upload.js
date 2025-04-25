document.addEventListener('DOMContentLoaded', () => {
    const dropZone = document.querySelector('.image-file-drop-zone .Polaris-DropZone');
    const fileInput = document.querySelector('.image-file-drop-zone .upload-file-input');
    const addFilesButton = document.querySelector('.image-file-drop-zone .Polaris-Button');

    const triggerFileInput = () => {
        fileInput.click();
    };
    // dropZone.addEventListener('click', triggerFileInput);

    addFilesButton.addEventListener('click', triggerFileInput);

    fileInput.addEventListener('change', (event) => {
        const files = event.target.files;
        if (files.length > 0) {
            console.log('Selected files:', files);
        }
    });
});