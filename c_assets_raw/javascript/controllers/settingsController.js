// cloudinary settings
const setAllCloudinarySettings = () => {
    ["iset1", "iset2", "iset3", "iset4"].forEach((e) => {
        const t = localStorage.getItem(e);
        t && (document.getElementById(e).value = t);
    });
},
cloudinarySettingsInputs = [
    {
        query: "#iset1",
        eventListenerType: "keyup",
        callback: () => {
            const e = document.getElementById("iset1").value;
            localStorage.setItem("iset1", e);
        },
    },
    {
        query: "#iset2",
        eventListenerType: "keyup",
        callback: () => {
            const e = document.getElementById("iset2").value;
            localStorage.setItem("iset2", e);
        },
    },
    {
        query: "#iset3",
        eventListenerType: "keyup",
        callback: () => {
            const e = document.getElementById("iset3").value;
            localStorage.setItem("iset3", e);
        },
    },
    {
        query: "#iset4",
        eventListenerType: "keyup",
        callback: () => {
            const e = document.getElementById("iset4").value;
            localStorage.setItem("iset4", e);
        },
    },
],
// dangerous to store password
// need to inform user its plain text
keepMeLoggedInInput = {
    query: "#klo-choose",
    eventListenerType: "change",
    callback: (e) => {
        const t = e.target.checked;
        localStorage.removeItem("klo"), localStorage.setItem("klo", t);
    },
},
includeTagsInput = {
    query: "#include-tags",
    eventListenerType: "change",
    callback: (e) => {
        const t = e.target.checked;
        localStorage.removeItem("include-tags"), localStorage.setItem("include-tags", t);
    },
},
backupAllButton = {
    query: "#backall",
    eventListenerType: "click",
    callback: async () => {
        vault.indexedDB.open();
        const [e, t, a] = await getEverything(),
            n = JSON.stringify({ chain: e, packet: t, userInfo: a, localStorage: localStorage });
        if (await isSafariExtended()) {
            const e = document.getElementById("backup-button-container"),
                t = `data:text/plain;base64,${btoa(n)}`;
            e.classList.remove("hiddo");
            document.getElementById("backup-button").href = t;
        } else generateDownloadLink(n, "cyqur-backup-settings.txt");
    },
},
wipeAllButton = {
    query: "#delall",
    eventListenerType: "click",
    callback: () => {
        delete localStorage.masterpassword, localStorage.clear(), sessionStorage.clear(), deleteAllDataFromDB().then((e) => alert(e)), window.location.reload();
    },
},
onCloudinarySettingsClick = {
    query: "#cloudinary-params",
    eventListenerType: "click",
    callback: () => {
        document.getElementById("cloudinary-settings-container").classList.replace("hiddo", "showy"),
            document.getElementById("options-settings-container").classList.replace("showy", "hiddo"),
            document.getElementById("data-settings-container").classList.replace("showy", "hiddo"),
            document.getElementById("cloudinary-params").classList.add("active"),
            document.getElementById("options-params").classList.remove("active"),
            document.getElementById("data-params").classList.remove("active");
    },
},
onOptionsSettingsClick = {
    query: "#options-params",
    eventListenerType: "click",
    callback: () => {
        document.getElementById("cloudinary-settings-container").classList.replace("showy", "hiddo"),
            document.getElementById("options-settings-container").classList.replace("hiddo", "showy"),
            document.getElementById("data-settings-container").classList.replace("showy", "hiddo"),
            document.getElementById("cloudinary-params").classList.remove("active"),
            document.getElementById("options-params").classList.add("active"),
            document.getElementById("data-params").classList.remove("active");
    },
},
onDataSettingsClick = {
    query: "#data-params",
    eventListenerType: "click",
    callback: () => {
        document.getElementById("cloudinary-settings-container").classList.replace("showy", "hiddo"),
            document.getElementById("options-settings-container").classList.replace("showy", "hiddo"),
            document.getElementById("data-settings-container").classList.replace("hiddo", "showy"),
            document.getElementById("cloudinary-params").classList.remove("active"),
            document.getElementById("options-params").classList.remove("active"),
            document.getElementById("data-params").classList.add("active");
    },
};
(() => {
addEvtListeners(cloudinarySettingsInputs),
    addEvtListener(keepMeLoggedInInput),
    addEvtListener(includeTagsInput),
    addEvtListener(backupAllButton),
    ["iset1", "iset2", "iset3", "iset4"].forEach((e) => {
        const t = localStorage.getItem(e);
        t && (document.getElementById(e).value = t);
    }),
    addEvtListener(wipeAllButton),
    addEvtListener(onCloudinarySettingsClick),
    addEvtListener(onOptionsSettingsClick),
    addEvtListener(onDataSettingsClick);
const e = localStorage.getItem("klo");
document.getElementById("klo-choose").checked = booleanMapper[e];
})();
