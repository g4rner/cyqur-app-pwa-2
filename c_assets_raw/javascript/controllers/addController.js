const secretInputEvent = {
    query: "#ddata",
    eventListenerType: "input",
    callback: async (e) => {
        e.preventDefault();
        let t = document.getElementById("thepwd2").value;
        if ("" === e.target.value) return void (document.getElementById("edata").value = "");
        const d = await checkPassword();
        t.length || d ? (hide("#ddata-password-message"), encrypt()) : show("#ddata-password-message");
    },
},
randomButton = {
    query: "#rho",
    eventListenerType: "click",
    callback: () => {
        random("thepwd2", "rho");
    },
},
checkAllSeeds = () => seedFieldsA.every((e) => document.getElementById(e).value === document.getElementById(`${e.slice(0, -1)}b`).value),
secureButton = {
    query: "#crud",
    eventListenerType: "click",
    callback: async () => {
        let e = document.getElementById("tags").value,
            t = document.getElementById("ddata").value,
            d = document.getElementById("thepwd2").value;
        if (!(e.length > 1)) return void show("#ddata-tags-message");
        if ((hide("#ddata-tags-message"), !(t.length > 2))) return void show("#ddata-secret-message");
        hide("#ddata-secret-message");
        if (!(await checkPassword()) && !d.length) return void show("#ddata-password-message");
        if ((hide("#ddata-password-message"), !seedFieldsA.every((e) => document.getElementById(e).value === document.getElementById(`${e.slice(0, -1)}b`).value))) return void show("#ddata-seeds-message");
        hide("#ddata-seeds-message");
        const a = await encrypt(),
            s = localStorage.getItem("token");
        if (s) {
            if (!document.getElementById("thetoken").value.match(tokenFormatRegex)) return;
            invokeSmartContract({
                data: a.encryptedData,
                puk: a.puk,
                token: s,
                callback: () => {
                    addChain(), logMe("Chain", "Added ");
                },
            });
        } else addChain(), logMe("Chain", "Added ");
    },
},
onInvalidTokenContinue = {
    query: "#on-invalid-token-continue",
    eventListenerType: "click",
    callback: () => {
        document.getElementById("messc-bc").classList.add("hiddo"), addChain(), logMe("Chain", "Added ");
    },
},
onInvalidTokenStop = {
    query: "#on-invalid-token-stop",
    eventListenerType: "click",
    callback: () => {
        document.getElementById("messc-bc").classList.add("hiddo");
    },
},
startOverButton = {
    query: "#crudclear",
    eventListenerType: "click",
    callback: () => {
        (document.getElementById("crudclear").hidden = !0),
            (document.getElementById("crud").hidden = !1),
            (document.getElementById("messc").textContent = ""),
            (document.getElementById("tags").value = ""),
            (document.getElementById("ddata").value = ""),
            (document.getElementById("edata").value = "");
            // remove files uploaded
            (document.querySelector(".drop-zone__input").value = "");
            (document.querySelectorAll('.drop-zone__thumb').forEach(e => e.remove()));
            // remove seed phrases
        for (let e = 0; e < seedFieldsA.length; e++) {
            const t = document.getElementById(seedFieldsA[e]);
            (t.value = ""), t.classList.remove("greenback"), t.classList.remove("redback");
            const d = document.getElementById(seedFieldsB[e]);
            (d.value = ""), d.classList.remove("greenback"), d.classList.remove("redback");
        }
    },
},
startOverPacketsButton = {
    query: "#packetclear",
    eventListenerType: "click",
    callback: () => {
     
            (document.getElementById("fmess").textContent = ""),
  
            // remove files uploaded
            (document.querySelector(".drop-zone__input").value = "");
            (document.querySelectorAll('.drop-zone__thumb').forEach(e => e.remove()));
      
       
    },
},
onGeneralClick = {
    query: "#addGeneral",
    eventListenerType: "click",
    callback: () => {
        show("#add-encrypted-field"),
            document.getElementById("create1").classList.replace("hiddo", "showy"),
            document.getElementById("create2").classList.replace("showy", "hiddo"),
            document.getElementById("uplood").classList.replace("showy", "hiddo"),
            document.getElementById("enter-meta").classList.replace("hiddo", "showy"),
            document.getElementById("addGeneral").classList.remove("active"),
            document.getElementById("addSeedPhrases").classList.remove("active"),
            document.getElementById("addImportPackets").classList.remove("active"),
            document.getElementById("ddata").parentElement.classList.remove("hiddo"),
            document.getElementById("add-fingerprint").classList.replace("hiddo", "showy"),
            document.getElementById("addGeneral").classList.add("active"),
            applyLanguage();
    },
},
onSeedPhrasesClick = {
    query: "#addSeedPhrases",
    eventListenerType: "click",
    callback: () => {
        show("#add-encrypted-field"),
            document.getElementById("create1").classList.replace("hiddo", "showy"),
            document.getElementById("create2").classList.replace("hiddo", "showy"),
            document.getElementById("ddata").parentElement.classList.add("hiddo"),
            document.getElementById("uplood").classList.replace("showy", "hiddo"),
            document.getElementById("enter-meta").classList.replace("hiddo", "showy"),
            (document.getElementById("ddata").value = ""),
            document.getElementById("addGeneral").classList.remove("active"),
            document.getElementById("addSeedPhrases").classList.remove("active"),
            document.getElementById("addImportPackets").classList.remove("active"),
            document.getElementById("add-fingerprint").classList.replace("hiddo", "showy"),
            document.getElementById("addSeedPhrases").classList.add("active"),
            applyLanguage();
    },
},
deleteAllClickPrompt = {
    query:"#deleteAll",
    eventListenerType: "click",
    callback:()=>{                         
        document.getElementById("zapall").classList.replace("hiddo", "showy");  
        document.getElementById("promptn").classList.replace("hiddo", "showy"); 
        document.getElementById("prompty").classList.replace("hiddo", "showy");        
    }
},
deleteAllClickPromptYes = {
    query:"#prompty",
    eventListenerType: "click",
    callback:()=>{                         
       console.log("reload"); 
       delete localStorage.masterpassword, localStorage.clear(), sessionStorage.clear(), deleteAllDataFromDB(), window.location.reload();          
    }
},
deleteAllClickPromptNo = {
    query:"#promptn",
    eventListenerType: "click",
    callback: async e => {  
        console.log("n"); 
        document.getElementById("zapall").classList.replace("showy", "hiddo");                         
        document.getElementById("promptn").classList.replace("showy", "hiddo"); 
        document.getElementById("prompty").classList.replace("showy", "hiddo");        
    }
},
deleteAllClick = {
    query:"#zapall",
    eventListenerType: "click",
    callback:()=>{  
        delete localStorage.masterpassword, localStorage.clear(), sessionStorage.clear(), deleteAllDataFromDB(), window.location.reload();      
       
    }
},
onImportPacketsClick = {
    query: "#addImportPackets",
    eventListenerType: "click",
    callback: () => {
        document.getElementById("create1").classList.replace("showy", "hiddo"),
            document.getElementById("create2").classList.replace("showy", "hiddo"),
            document.getElementById("uplood").classList.replace("hiddo", "showy"),
            document.getElementById("enter-meta").classList.replace("showy", "hiddo"),
            document.getElementById("addGeneral").classList.remove("active"),
            document.getElementById("addSeedPhrases").classList.remove("active"),
            document.getElementById("addImportPackets").classList.remove("active"),
            hide("#add-encrypted-field"),
            document.getElementById("add-fingerprint").classList.replace("showy", "hiddo"),
            document.getElementById("addImportPackets").classList.add("active"),
            applyLanguage();
    },
},
checkSeed = async (e, t, d) => {
    let a = {};
    if (e === t) {
        let t = "";
        const s = "seed";
        for (let e = 0; e < seedFieldsB.length; e++) t = `${t}${0 === e ? "" : " "}(${e}): ${document.getElementById(seedFieldsB[e]).value}`;
        (document.getElementById("ddata").value = t),
            (a = document.getElementById(s + d + "b")),
            "" !== e ? (a.classList.add("greenback"), a.classList.remove("redback")) : (a.classList.remove("redback"), a.classList.remove("greenback"));
        let n = document.getElementById("thepwd2").value;
        return (await checkPassword()) || n.length ? (hide("#ddata-password-message"), void encrypt()) : void show("#ddata-password-message");
    }
    (a = document.getElementById("seed" + d + "b")), a.classList.add("redback"), a.classList.remove("greenback");
},
setBackendTasks = (e, t) => {
    const d = getBackendTasks();
    localStorage.setItem("backendTasks", JSON.stringify(t ? [...d, ...e] : e));
},
getBackendTasks = () => {
    const e = JSON.parse(localStorage.getItem("backendTasks"));
    return e || [];
},
removeBackendTask = (e) => {
    const t = getBackendTasks().filter((t) => t.taskId !== e);
    setBackendTasks(t, !1);
},
startObservingTasks = () => {
    const e = setInterval(() => {
        const t = getBackendTasks();
        t.length > 0
            ? t.forEach(({ taskId: e, puk: t }) => {
                  e && isStoredOnBlockchain(e, t);
              })
            : clearInterval(e);
    }, backendTaskDelayCheck);
};
(() => {
addEvtListener(secretInputEvent),
addEvtListener(deleteAllClickPrompt),
addEvtListener(deleteAllClickPromptYes),
addEvtListener(deleteAllClickPromptNo),
addEvtListener(deleteAllClick),
    addEvtListener(randomButton),
    addEvtListener(startOverButton),
    addEvtListener(startOverPacketsButton),  
    addEvtListener(secureButton),
    addEvtListener(onGeneralClick),
    addEvtListener(onSeedPhrasesClick),
    addEvtListener(onImportPacketsClick),
    addEvtListener(onInvalidTokenStop),
    addEvtListener(onInvalidTokenContinue),
    startObservingTasks(),
    (document.getElementById("thetoken").value = localStorage.getItem("token"));
for (let e = 0; e < seedFieldsA.length; e++)
    addEvtListener({
        query: `#${seedFieldsA[e]}`,
        eventListenerType: "keyup",
        callback: function () {
            checkSeed(document.getElementById(seedFieldsA[e]).value, document.getElementById(seedFieldsB[e]).value, e);
        },
    }),
        addEvtListener({
            query: `#${seedFieldsB[e]}`,
            eventListenerType: "keyup",
            callback: function () {
                checkSeed(document.getElementById(seedFieldsA[e]).value, document.getElementById(seedFieldsB[e]).value, e);
            },
        });
})();
