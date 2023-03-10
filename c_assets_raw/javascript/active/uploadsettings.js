function readFileAsText(e) {
    return new Promise(function (t, o) {
        let a = new FileReader();
        (a.onload = function () {
            t({ name: e.name, value: a.result });
        }),
            (a.onerror = function () {
                o(a);
            }),
            a.readAsText(e);
    });
}
let form = document.querySelector("#upload"),
    file = document.querySelector("#file");
var importedObject = {
    f1: "",
    f2: "",
    f3: "",
    f4: "",
    f5: "",
    f6: "",
    f7: "",
    f8: "",
    f9: "",
    f10: "",
    hash: "",
    puk: "",
    tags: "",
    text: "",
    cloud1: "",
    cloud2: "",
    cloud3: "",
    timeStamp: new Date().getTime(),
    changed: !1,
    type: "",
    transactionHash: "",
};
const checkHowMuchFragmentsHasLeft = () => {
    let e = 0;
    return (
        Object.keys(importedObject).forEach((t) => {
            t.includes("f") && "" === importedObject[t] && ++e;
        }),
        alert(`${e} fragments left to import`),
        console.log(t + ":" +e),
        (document.getElementById("fmess").innerHTML = 10 - e + '/10 <span class="en16"></span>'),
        e
    );
};
var resetObject = () => {
    (importedObject = {
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        f7: "",
        f8: "",
        f9: "",
        f10: "",
        hash: "",
        puk: "",
        tags: "",
        text: "",
        cloud1: "",
        cloud2: "",
        cloud3: "",
        timeStamp: new Date().getTime(),
        changed: !1,
        type: "",
        transactionHash: "",
    }),
        (document.getElementById("fmess").innerHTML = "");
};
function logFile(e) {
    if (e[0].name.includes("cyqur-backup-settings")) {
        const t = JSON.parse(e[0].value);
        return (
            Object.keys(t).forEach(async (e) => {
                "localStorage" !== e
                    ? await addAll(t[e], e)
                    : Object.keys(t[e]).forEach((o) => {
                          localStorage.setItem(o, t[e][o]);
                      });
            }),
            resetObject(),
            alert("Backup restored"),
            void onPPChanged("3")
        );
    }
    if (!importedObject.changed) {
        importedObject.changed = !0;
        const { puk: t, type: o } = JSON.parse(e[0].value);
        (importedObject.puk = t), (importedObject.type = o.substring(0, 2));
    }
    let t = !1;
    for (const o of e) {
        const e = JSON.parse(o.value);
        if (importedObject.puk !== e.puk) {
            alert("Error: not from the same chain"), (t = !0), resetObject(); 
            break;
        }
        if (e.type.includes("CR")) {
            alert("Error: Cloud packets not supported"), (t = !0), resetObject();
            break;
        }
    }
    t ||
        (e.forEach((e) => {
            const t = JSON.parse(e.value);
            Object.keys(importedObject).forEach((e) => {
                "" === importedObject[e] && (importedObject[e] = t[e]);
            });
        }),
        checkHowMuchFragmentsHasLeft() ||
            ("LR" === importedObject.type &&
                addToDatabase(importedObject, CHAIN, CHAIN, READWRITE).then((e) => {
                    addChainToStoreSuccessHandler(e);
                    const { f1: t, f2: o, f3: a, f4: r, f5: n, f6: c, f7: l, f8: d, f9: i, f10: s } = importedObject,
                        f = [t, o, a, r, n, c, l, d, i, s].map((e) => atob(e)).join("");
                    (document.getElementById("dedata").value = ""), (document.getElementById("pastedin").value = ""), (document.getElementById("pastedin").value = f), decrypt(), onPPChanged("2"), window.scrollTo(0, 0), resetObject();
                })));
}
function doSomeParsing(e) {
    try {
        JSON.parse(e);
    } catch {
        logMe("Import", "Failed. Wrong format"), (document.getElementById("edata").textContent = "Import failed. File is not the correct format");
    }
}
function handleSubmit(e) {
    if ((e.preventDefault(), !file.value.length)) return;
    let t = [];
    if (file.files.length) {
        for (let e = 0; e < file.files.length; e++) t.push(readFileAsText(file.files[e]));
        Promise.all(t).then((e) => {
            logFile(e);
        });
    }
}
form.addEventListener("submit", handleSubmit);
