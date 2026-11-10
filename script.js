// Get references to the DOM elements
const button = document.getElementById('takePhotoBtn');
const message = document.getElementById('message');
const video = document.getElementById('camera');

//defining the function to show the message when the button is clicked
function showMessage() {
    message.textContent = "Camera feature coming soon!";
}

//adding an event listener to the button to call the showMessage function when clicked
button.addEventListener("click", showMessage);

//defining the function to start the camera
async function startCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: true
        });

        video.srcObject = stream;

    } catch (error) {
        message.textContent = "Unable to access the camera. Please check your device settings.";
        console.error(error);
    }
}

//calling the function to start the camera
startCamera();