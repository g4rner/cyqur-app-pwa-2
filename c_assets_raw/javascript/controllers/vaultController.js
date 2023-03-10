async function renderChain({ tags: i, puk: a, timeStamp: o, f1: f, f2: l, f3: t, f4: e, f5: s, f6: c, f7: h, f8: y, f9: v, f10: u, cloud1: r, token: p, transactionHash: n }) {
    const vt = document.getElementById("gridd"),
        w = document.createElement("div");
    w.className = "wallrow boxshad";
    const b = document.createElement("a");
    b.className = "walllink";
    const k = document.createElement("a");
    k.className = "walllink";
    const yt = i.replace(/[^a-zA-Z ]/g, ""),
        nt = new Date();
    nt.setTime(o);
    const pt = new Intl.DateTimeFormat("en", { year: "numeric" }).format(nt),
        wt = new Intl.DateTimeFormat("en", { month: "numeric" }).format(nt),
        bt = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(nt);
    dateString = `${pt}-${wt}-${bt}`;
    const ot = [f, l, t, e, s, c, h, y, v, u].map((n) => atob(n)),
        st = ot.join("");
    let it = [...addressPrefixesLocal];
    "no" !== r && (it = [...it, ...addressPrefixesCloud]);
    const kt = it.map((n) => `${n}${a}`);
    let ht = [];
    await getAllbyKeys(kt, "packet", "packet", "readwrite").then((n) => {
        ht = n;
    });
    const ct = JSON.parse(localStorage.getItem("include-tags")),
        lt = ht.filter((n) => n),
        at = [];
    for (let n = 0; n < lt.length; n++) {
        let t = lt[n];
        const { type: i } = t,
            r = { ...t, ...(!ct && { tags: "" }) },
            u = JSON.stringify(r),
            f = await generatePacketLink({ typeofPacket: i, puk: a, stringifiedObject: u, tags: yt });
        at.push(f);
    }
    const dt = generateVaultBlock({ puk: a, tags: i, dateString: dateString }),
        gt = generateFragmentsBlock(ot);
    k.addEventListener(
        "click",
        () => {
            vault.indexedDB.deleteChain(a);
        },
        !1
    );
    b.addEventListener("click", () => {
        (document.getElementById("dedata").value = ""), (document.getElementById("pastedin").value = ""), (document.getElementById("pastedin").value = st), decrypt(), onPPChanged("2"), window.scrollTo(0, 0);
    });
    k.innerHTML = trashCan;
    k.insertAdjacentHTML("beforeend", '<p class="en83">Delete</p>');
    b.innerHTML =
        '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="M21.2691 11.7199L21.3767 11.5L21.2691 11.2801C19.5355 7.7395 15.9818 5.5 12 5.5C8.01821 5.5 4.46448 7.7395 2.73094 11.2801L2.62329 11.5L2.73094 11.7199C4.46448 15.2605 8.01821 17.5 12 17.5C15.9818 17.5 19.5355 15.2605 21.2691 11.7199ZM1.53928 11.5C3.24223 7.39095 7.28287 4.5 12 4.5C16.7171 4.5 20.7578 7.39095 22.4607 11.5C20.7578 15.6091 16.7171 18.5 12 18.5C7.28287 18.5 3.24223 15.6091 1.53928 11.5ZM15 11.5C15 9.84386 13.6561 8.5 12 8.5C10.3439 8.5 9 9.84386 9 11.5C9 13.1561 10.3439 14.5 12 14.5C13.6561 14.5 15 13.1561 15 11.5ZM8 11.5C8 9.29614 9.79614 7.5 12 7.5C14.2039 7.5 16 9.29614 16 11.5C16 13.7039 14.2039 15.5 12 15.5C9.79614 15.5 8 13.7039 8 11.5Z" fill="#744BCD" stroke="#744BCD"/>\n  </svg>\n  ';
    b.insertAdjacentHTML("beforeend", '<p class="en2">View</p>');
    const ni = generateDataInfoFunction({ puk: a, encryptedSecret: st, transactionHash: n, exchangeToken: p }),
        d = document.createElement("infoBox");
    d.classList.add("infoBox");
    d.insertAdjacentHTML("afterbegin", ni);
    w.insertAdjacentHTML("beforeend", dt);
    const rt = document.createElement("details"),
        ut = document.createElement("summary"),
        g = document.createElement("div");
    ut.classList.add("mp");
    ut.innerHTML = '<span class="en15"></span>';
    g.classList.add("flex-container-wrap");
    rt.appendChild(ut);
    rt.appendChild(g);
    at.map((n) => g.appendChild(n));
    g.insertAdjacentHTML("afterend", `<p class="tags-included ${ct ? "en81" : "en82"}"> </p>`);
    (await isSafariExtended()) && g.insertAdjacentHTML("afterend", '<p class="tags-included en91"></p>');
    const ft = document.createElement("details"),
        et = document.createElement("summary");
    et.classList.add("mp");
    et.innerHTML = '<span class="en16"></span>';
    ft.appendChild(et);
    ft.insertAdjacentHTML("beforeend", gt);
    d.appendChild(ft);
    d.appendChild(rt);
    w.appendChild(d);
    const tt = document.createElement("div");
    tt.classList.add("flex-container-wrap");
    tt.appendChild(k);
    tt.appendChild(b);
    w.appendChild(tt);
    w.insertAdjacentHTML("beforeend", "<p></p>");
    w.insertAdjacentHTML("beforeend", "<p></p>");
    vt.appendChild(w);
    applyLanguage();
}
async function saveToClipboard(n) {
    await navigator.clipboard.writeText(n);
}
async function paste(n) {
    await navigator.clipboard.readText().then((t) => {
        (document.getElementById(n).value = ""), (document.getElementById(n).value = t);
    });
}
const generateVaultBlock = ({ tags: t, puk: i, dateString: n }) =>
        ` 
        <div class='flex-container-clean'>
        <div id='tagdatebox' class='fl1 en40 vhed1'>Created</div>
        <div class='en25 vhed2'>Tags</div>
        </div>

        <div class='flex-container-clean'>
        <div class='fl1 vrow1'>${n.toString()}</div>
        <div class='vrow2'>
        <textarea class='vrow2 tagsarea taggle ltr' id='${i}' name='${i}'>${t}</textarea></div>
        </div>
        `,
    generateFragmentsBlock = (n) => {
        let t = "<div class='flex-container-clean'><div class='fl1 tagtag'># 1</div><div class='fl2'><textarea class='tagsarea'>";
        return (
            n.forEach((n, i) => {
                t += i ? `</textarea></div></div><div class='flex-container-clean'><div class='fl1 tagtag'># ${++i}</div><div class='fl2'><textarea class='tagsarea'>${n}` : `${n}`;
            }),
            (t += "</textarea></div></div>"),
            t
        );
    }
/* const generateVaultBlock = ({ tags: t, puk: i, dateString: n }) =>
        `<div id='tagdatebox' class='dataBox'><div class='flex-container-clean'><div class='fl1 tagtag en25'>Tags</div><div class='fl2'><textarea class='tagsarea taggle ltr' id='${i}' name='${i}'>${t}</textarea></div></div><div class='flex-container-clean'><div class='fl1 en40'>Created</div><div class='fl2'>${n.toString()}</div></div></div></div>`,
    generateFragmentsBlock = (n) => {
        let t = "<div class='flex-container-clean'><div class='fl1 tagtag'># 1</div><div class='fl2'><textarea class='tagsarea'>";
        return (
            n.forEach((n, i) => {
                t += i ? `</textarea></div></div><div class='flex-container-clean'><div class='fl1 tagtag'># ${++i}</div><div class='fl2'><textarea class='tagsarea'>${n}` : `${n}`;
            }),
            (t += "</textarea></div></div>"),
            t
        );
    }, */
  
   ,
    generateDataInfoFunction = ({ puk: t, encryptedSecret: r, transactionHash: n, exchangeToken: i }) => `<details>
  <summary><span class='en17'></span></summary>
  <div class='flex-container-clean'>
      <div class='fl1'>Id</div>
      <div class='fl2' id='idSecret'>${t}</div>
      <div class='pasteButton'><button id='copyIdButton'>Copy</button></div>
  </div>
  <div class='flex-container-clean'>
      <div class='fl1 en18' id='datax'>Encrypted Secret</div>
      <div class='fl2' id='idSecret'>${r}</div>
      <div class='pasteButton'>
          <button id='copyIdButton'>Copy</button>
      </div>
  </div>
  <div class='flex-container-clean'>
      <div class='fl1 en59' id='datax'>Blockchain</div>
      <div class='fl2'>${n ? "Ethereum" : "-"}</div>
  </div>
  <div class='flex-container-clean'>
      <div class='fl1 en60' id='datax'>Blockchain</div>
      <div class='fl2' id="bcTransactionHash">${n || "-"}</div>
      <div class='pasteButton'><button id='copyIdButton'>Copy</button></div>
  </div>
  <div class='flex-container-clean'>
      <div class='fl1 en89' id='datax'>Blockchain explorer</div>
      <div class='fl2'>${n ? `<a target="_blank" href="https://goerli.etherscan.io/tx/${n}">https://goerli.etherscan.io/tx/${n}</a>` : "-"}</div>
  </div>
  <div class='flex-container-clean'>
      <div class='fl1 en61' id='datax'>Blockchain</div>
      <div class='fl2' id="exchangeTokenData">${i || "-"}</div>
      <div class='pasteButton'>
      <button id='copyIdButton'>Copy</button>
  </div>
  </div>
  <div>
</details>`,
    generatePacketLink = async ({ typeofPacket: t, puk: r, stringifiedObject: n, tags: i }) => {
        const f = await isSafariExtended(),
            e = document.createElement("a"),
            u = document.createElement(f ? "a" : "div");
        if ((u.appendChild(e), (u.id = `${t}${r}`), (u.className = "generalbutton alinkbutton"), (u.innerHTML = linksRenderData[t] .name), f)) {
            const r = `data:text/plain;base64,${btoa(n)}`;
            u.href = r;
            u.download = i + linksRenderData[t].text;
        }
        return (
            u.addEventListener(
                "click",
                () => {
                    generateDownloadLink(n, i + linksRenderData[t].text);
                },
                !1
            ),
            u
        );
    };
const addChain = () => {
        const n = document.getElementById("edata").value;
        vault.indexedDB.addChain(n);
    },
    editChain = (n, t, i) =>
        updateItem(n, { tags: t, timeStamp: i }, CHAIN, CHAIN, READWRITE)
            .then((n) => logMe(n))
            .catch((n) => logMe(n));
document.body.addEventListener("keyup", (n) => {
    if (n.target.classList.contains("taggle")) {
        const t = n.target.id,
            i = n.target.value;
        vault.indexedDB.updateItem(t, { tags: i });
    }
});
const refreshButton = {
    query: "#refreshbut",
    eventListenerType: "click",
    callback: () => {
        vault.indexedDB.open();
    },
};
addEvtListener(refreshButton);
document.addEventListener("click", (n) => {
    if (n.target && n.target.id.includes("copyIdButton")) {
        const t = n.path[2];
        saveToClipboard((t.children.idSecret || t.children.bcTransactionHash || t.children.exchangeTokenData).innerHTML);
    }
});
const pasteButtons = [
    { pasteButtonId: "#pasteButtonEncryptedSecret", targetLocationId: "pastedin" },
    { pasteButtonId: "#pasteButtonTags", targetLocationId: "tags" },
    { pasteButtonId: "#pasteButtonSecret", targetLocationId: "ddata" },
];
pasteButtons.forEach(({ pasteButtonId: n, targetLocationId: t }) => {
    document.querySelector(n).addEventListener("click", () => paste(t));
});
