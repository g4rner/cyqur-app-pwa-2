const decryptSecretViewInputs = [{
    query: "#ipwd",
    eventListenerType: "input",
    callback: decrypt
}, {
    query: "#pastedin",
    eventListenerType: "keyup",
    callback: decrypt
}],
parseTheResponse = async e => {
    if (document.getElementById("dedata").value = e, e.length < 2) {
        const e = document.getElementsByClassName("jsmeta");
        for (; e.length > 0;) e[0].remove()
    } else {
        const {
            secret: t,
            tags: n,
            puk: d,
            meta: i,
            encoding: c,
            hash: l,
            transactionHash: v
        } = JSON.parse(e);
        newDate = new Date, newDate.setTime(i), dateString = newDate.toUTCString(), sleep(1e3);
        localStorage.getItem("BCBC" + d), localStorage.getItem("BCTX" + d), localStorage.getItem("BCTK" + d);
        const m = await getItem(`LR00${d}`, PACKET, PACKET, READONLY);
        var a = sha256(encodeURIComponent(t) + i);
        document.getElementById("dedata").value = decodeURIComponent(atob(t)), document.getElementById("demeta").innerHTML = '<div class="meta"><div class="flex-container jsmeta"><div class="m1"><span class="en25"></span></div><div class="m2">' + n + '</div></div><div class="flex-container jsmeta"><div class="m1"><span class="en55"></span></div><div id="md1" class="m2">' + d + '</div></div><div class="flex-container jsmeta"><div class="m1"><span class="en55"></span>-<span id="md2" class="en56"></span></div><div class="m2">' + a + '</div></div><div class="flex-container jsmeta"><div class="m1"><span class="en54"></span></div><div id="md3" class="m2">' + dateString + '</div></div><div class="flex-container jsmeta"><div class="m1"><span class="en57"></span></div><div id="md4" class="m2">' + c + '</div></div><div class="flex-container jsmeta"><div class="m1"><span class="en36"></span></div><div id="md5" class="m2">' + e + '</div></div><div class="flex-container jsmeta"><div class="m1"><span class="en59"></span></div><div id="md6" class="m2">' + (m  .transactionHash ? "Ethereum" : "-") + '</div></div><div class="flex-container jsmeta"><div class="m1"><span class="en60"></span></div><div id="md7" class="m2">' + `${m?.transactionHash?m?.transactionHash:"-"}</div></div><div class="flex-container jsmeta"><div class="m1"><span class="en89"></span></div><div id="md7" class="m2">` + (m  .transactionHash ? `<a target="_blank" href="https://goerli.etherscan.io/tx/${m?.transactionHash}">https://goerli.etherscan.io/tx/${m?.transactionHash}</a>` : "-") + "</div></div></details></div>", applyLanguage();
        try {
            let e = localStorage.getItem("LR00" + d);
            const a = JSON.parse(e);
            var s = '[{"f1":"' + a.f1 + '","f2":"' + a.f2 + '","f3":"' + a.f3 + '","f4":"' + a.f4 + '","f5":"' + a.f5 + '","f6":"' + a.f6 + '","f7":"' + a.f7 + '","f8":"' + a.f8 + '","f9":"' + a.f9 + '","f10":"' + a.f10 + '","hash":"' + a.hash + '","puk":"' + d + '","tags":"' + n + '","text":"' + document.getElementById("pastedin").value + '","cloud1":"' + a.cloud1 + '","cloud2":"' + a.cloud2 + '","cloud3":"' + a.cloud3 + '","timeStamp":' + i + "}]";
            localStorage.removeItem("LR00" + d), localStorage.setItem("LR00" + d, s), editChain(d, n, i), applyLanguage()
        } catch {}
    }
};
addEvtListeners(decryptSecretViewInputs);