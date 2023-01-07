var vault = { indexedDB: {} };
vault.indexedDB.db = null;
const onUpgradeNeededHandler = (e) => {
        var t = e.target.result;
        t.objectStoreNames.contains(CHAIN) && t.deleteObjectStore(CHAIN),
            t.createObjectStore(CHAIN, { keyPath: "puk" }),
            t.objectStoreNames.contains(PACKET) && t.deleteObjectStore(PACKET),
            (packets = t.createObjectStore(PACKET, { keyPath: PACKET_ID })),
            packets.createIndex(PACKET_PUK, "puk"),
            t.objectStoreNames.contains(USER_INFO) && t.deleteObjectStore(USER_INFO),
            t.createObjectStore(USER_INFO, { keyPath: USER_ID });
    },
    openDBSuccessHandler = (e) => {
        vault.indexedDB.getAllChainItems();
    },
    onErrorHandler = (e) => {
        console.log("Error: ", e);
    },
    countRequestSuccessHandler = (e, t = 0) => {
        var n = document.getElementById("gridmess"),
            a = document.getElementById("countinvault"),
            d = document.getElementById("secretsCount");
        e ? ((n.innerHTML = '<span class="en51">Vault is empty</span>'), (d.textContent = "0"), (a.textContent = "0")) : ((n.textContent = ""), (a.textContent = t), (d.textContent = t)), applyLanguage();
    },
    cursorRequestSuccessHandler = ({ target: { result: e } }) => {
        e && (renderChain(e.value), e.continue());
    },
    deleteChainSuccessHandler = (e) => {
        vault.indexedDB.getAllChainItems();
    },
    onRunCloudinaryHandler = (e) => {
        storePackets(e.f1, e.f2, e.f3, e.f4, e.f5, e.f6, e.f7, e.f8, e.f9, e.f10, e.hash, e.puk, e.tags, e.text, "no", "no", "no", 0, "LR", e.transactionHash),
            isCloudConfigSet() && runCloud1(e.f1, e.f2, e.f3, e.f4, e.f5, e.f6, e.f7, e.f8, e.f9, e.f10, e.hash, e.puk, e.tags, e.text, "c1", "no", "no", e.timestamp),
            (document.getElementById("messc").innerHTML = '<span class="en38 success-input">Complete</span>'),
            (document.getElementById("crud").hidden = !0),
            (document.getElementById("crudclear").hidden = !1),
            applyLanguage();
    },
    addChainToStoreSuccessHandler = (e) => {
        var t = document.getElementById("thedpwd");
        null != t && "" != t.value ? window.document.getElementById("thedpwd").value : window.document.getElementById("thepwd").value;
        getItem(e, CHAIN, CHAIN, READWRITE).then((e) => {
            var t;
            (t = e),
                storePackets(t.f1, t.f2, t.f3, t.f4, t.f5, t.f6, t.f7, t.f8, t.f9, t.f10, t.hash, t.puk, t.tags, t.text, "no", "no", "no", 0, "LR", t.transactionHash),
                isCloudConfigSet() && runCloud1(t.f1, t.f2, t.f3, t.f4, t.f5, t.f6, t.f7, t.f8, t.f9, t.f10, t.hash, t.puk, t.tags, t.text, "c1", "no", "no", t.timestamp),
                (document.getElementById("messc").innerHTML = '<span class="en38 success-input">Complete</span>'),
                (document.getElementById("crud").hidden = !0),
                (document.getElementById("crudclear").hidden = !1),
                applyLanguage();
        }),
            countItems(CHAIN, READWRITE, CHAIN).then((e) => {
                countRequestSuccessHandler(0 === e, e);
            });
    };
async function init() {
    vault.indexedDB.open();
}
(vault.indexedDB.onerror = (function (e) {
    console.log("Error: ", e);
})(
    (vault.indexedDB.open = async function () {
        openDB(DB_NAME, 1, onUpgradeNeededHandler, openDBSuccessHandler, onErrorHandler);
    })
)),
    (vault.indexedDB.addChain = function (e) {
        var t = document.getElementById("dhead").value,
            n = document.getElementById("timmystamp").value,
            a = document.getElementById("tags").value,
            d = sha256(document.getElementById("edata").value + n),
            l = document.getElementById("split641").value,
            o = document.getElementById("split642").value,
            u = document.getElementById("split643").value,
            c = document.getElementById("split644").value,
            s = document.getElementById("split645").value,
            r = document.getElementById("split646").value,
            m = document.getElementById("split647").value,
            I = document.getElementById("split648").value,
            i = document.getElementById("split649").value,
            g = document.getElementById("split6410").value,
            E = createPacketDB(a, e, t, d, l, o, u, c, s, r, m, I, i, g, localStorage.iset1 ? "CY" : "no", "no", "no", n);
        addToDatabase(E, CHAIN, CHAIN, READWRITE).then((e) => addChainToStoreSuccessHandler(e));
    }),
    (vault.indexedDB.deleteChain = function (e) {
        deleteAllByKey(e, PACKET, PACKET, READWRITE, PACKET_PUK).then((e) => console.log(e)),
            deleteItemFromDatabase(e, CHAIN, CHAIN, READWRITE).then(deleteChainSuccessHandler),
            localStorage.removeItem(`BCBC${e}`),
            localStorage.removeItem(`BCTX${e}`),
            localStorage.removeItem(`BCTK${e}`),
            localStorage.removeItem(`cloudStatus:${e}`);
    }),
    (vault.indexedDB.getAllChainItems = function () {
        (document.getElementById("gridd").innerHTML = ""), countItems(CHAIN, READWRITE, CHAIN).then((e) => countRequestSuccessHandler(0 === e, e));
        var e = IDBKeyRange.lowerBound(0);
        readAll(e, CHAIN, CHAIN, cursorRequestSuccessHandler, onErrorHandler);
    }),
    (vault.indexedDB.updateItem = (e, t) => {
        updateItem(e, t, CHAIN, CHAIN, READWRITE).then((e) => console.log(e));
    });
