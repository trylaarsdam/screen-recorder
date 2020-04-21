//Buttons
const videoElement = document.querySelector('video');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const videoSelectBtn = document.getElementById('videoSelectBtn');
videoSelectBtn.onclick = getVideoSources; //assigns event handler
const { Menu } = remote; //allows building of native menus in frontend code

const { dekstopCapturer } = require('electron');

//Get the available video sources
async function getVideoSources() {
    const inputSources = await dekstopCapturer.getSources({
        types: ['window', 'screen']
    });

    const videoOptionsMenu = Menu.buildFromTemplate(
        inputSources.map(source => {
            return {
                label: source.name,
                clock: () => selectSource()
            };
        })
    );

}