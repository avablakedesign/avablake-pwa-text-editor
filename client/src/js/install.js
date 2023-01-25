const butInstall = document.getElementById('buttonInstall');
let promptLater = null;
// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    promptLater = event;
    butInstall.classList.remove('hidden');
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (promptLater) {
        promptLater.prompt()
    
        butInstall.classList.add("hidden");
        promptLater = null;    
    }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    promptLater = null;
    console.log("app installed");
});
