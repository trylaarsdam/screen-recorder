//Buttons
const videoElement = document.querySelector('video');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const videoSelectBtn = document.getElementById('videoSelectBtn');
videoSelectBtn.onclick = getVideoSources; //assigns event handler

const { dekstopCapturer } = require('electron');

//Get the available video sources
async function getVideoSources() {
    const inputSources = await dekstopCapturer.getSources({
        types: ['window', 'screen']
    });
    

}