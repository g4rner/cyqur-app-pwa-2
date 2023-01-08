const pageIcons = [
    {
        query: "#lk1",
        eventListenerType: "click",
        callback: () => {
            onPPChanged("1");
        },
    },
    {
        query: "#lk2",
        eventListenerType: "click",
        callback: () => {
            onPPChanged("2");
        },
    },
    {
        query: "#lk3",
        eventListenerType: "click",
        callback: () => {
            onPPChanged("3");
        },
    },
    {
        query: "#lk4",
        eventListenerType: "click",
        callback: () => {
            onPPChanged("4");
        },
    },
    {
        query: "#lk5",
        eventListenerType: "click",
        callback: () => {
            onPPChanged("5");
        },
    },
],
hideAllSections = () => {
    sections.forEach((e) => {
        hide(`#${e}`);
    });
},
showSection = (e) => {
    show(`#section${e}`);
},
deselectAllFooterButtons = () => {
    footerButtons.forEach((e) => {
        document.getElementById(e).classList.remove("selected");
    });
},
selectFooterButton = (e) => {
    document.getElementById(`lk${e}`).classList.add("selected");
},
onPPChanged = (e) => {
    vault.indexedDB.open(),
        sections.forEach((e) => {
            hide(`#${e}`);
        }),
        showSection(e),
        footerButtons.forEach((e) => {
            document.getElementById(e).classList.remove("selected");
        }),
        selectFooterButton(e),
        window.scrollTo(0, 0);
};
addEvtListeners(pageIcons);
