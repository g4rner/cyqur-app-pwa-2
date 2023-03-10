const setLayoutAs = e => {
    if ("loggedIn" === e) return show("#app-logo"), hide("#big-logo"), document.getElementById("navbar-container").classList.remove("top64"), document.getElementById("lk1").classList.remove("flex1"), document.getElementById("lk2").classList.remove("flex1"), document.getElementById("navbar-links").classList.remove("flex1"), document.getElementById("thebody").classList.remove("pt128"), document.getElementById("thebody").classList.add("pt64"), document.getElementById("navbar").classList.remove("height128"), document.getElementById("navbar").classList.add("height64"), show("#lk2"), show("#lk3"), show("#lk4"), show("#lk5"), document.getElementById("workarea").className = "warea", show("#countinvault"), show("#deletePasswordButton"), document.getElementById("thepwd").parentElement.classList.remove("styled-input-errored"), show("#messp"), hide("#messp"), document.getElementById("signInButton").innerText = "Sign in", show("#deletePasswordButtonContainer"), hide("#signInButton"), void show("#loggedInIndicator");
    hide("#app-logo"), show("#big-logo"), document.getElementById("navbar-container").classList.add("top64"), document.getElementById("lk1").classList.add("flex1"), document.getElementById("lk2").classList.add("flex1"), document.getElementById("navbar-links").classList.add("flex1"), document.getElementById("thebody").classList.remove("pt64"), document.getElementById("thebody").classList.add("pt128"), document.getElementById("navbar").classList.remove("height64"), document.getElementById("navbar").classList.add("height128"), hide("#lk3"), hide("#lk4"), hide("#lk5"), hide("#workarea"), hide("#countinvault"), hide("#deletePasswordButtonContainer"), show("#signInButton"), hide("#loggedInIndicator"), document.getElementById("thepwd").readOnly = !1
};
var userExists = !1;
const chooseLanguageEvent = {
        query: ".lang-choose",
        eventListenerType: "change",
        callback: e => {
            const t = e.target.value;
            localStorage.removeItem("lang"), localStorage.setItem("lang", t), applyLanguage()
        }
    },
    deletePasswordButton = {
        query: "#deletePasswordButton",
        eventListenerType: "click",
        callback: async () => {
            localStorage.getItem("passwordExist") && (localStorage.removeItem("passwordExist"), await updateItem(1, {
                hmp: "",
                emp: ""
            }, USER_INFO, USER_INFO, READWRITE), hide("#deletePasswordButton"), logMe("Main password", "deleted"), localStorage.removeItem("klo"), document.getElementById("thepwd").value = "", document.getElementById("signInButton").innerText = "Register", setLayoutAs("loggedOut"))
        }
    },
    signInButton = {
        query: "#signInButton",
        eventListenerType: "click",
        callback: async e => {
            e.preventDefault(), await getItem(1, USER_INFO, USER_INFO, READONLY).then((e => {
                userExists = e
            })).catch((e => {
                userExists = !1
            }));
            if (localStorage.getItem("passwordExist")) {
                var t = document.getElementById("thepwd").value;
                const {
                    length: e
                } = t;
                1 === e && focusHandler();
                await checkPassword() ? (blurHandler(), hide("#ddata-password-message"), document.getElementById("workarea").className = "warea", document.getElementById("loko-sign-in").innerHTML = '<span class="footlocker en19"></span>', setLayoutAs("loggedIn")) : (show("#messp"), document.getElementById("messp").innerHTML = '<span class="en86"></span>'), applyLanguage()
            } else {
                userExists || await addToDatabase({
                    userId: 1,
                    hmp: "",
                    emp: ""
                }, USER_INFO, USER_INFO, READWRITE), await getItem(1, USER_INFO, USER_INFO, READONLY).then((({
                    hmp: e
                }) => {
                    userPassword = e
                }));
                const e = document.getElementById("thepwd").value;
                if (e.length < 6) show("#messp"), document.getElementById("messp").innerHTML = '<span class="en12"></span>', document.getElementById("thepwd").parentElement.classList.add("styled-input-errored"), applyLanguage();
                else {
                    const t = sha256(e);
                    let n = "";
                    await encryptData(e, e).then((e => {
                        n = e
                    })).then((() => {
                        logMe("Secret", "Encrypted")
                    })), await updateItem(1, {
                        emp: n,
                        hmp: t
                    }, USER_INFO, USER_INFO, READWRITE), localStorage.setItem("passwordExist", !0), localStorage.setItem("klo", "n"), document.getElementById("ipwd").value = document.getElementById("thepwd").value, sessionStorage.setItem((new Date).getTime(), "pwd changed"), setLayoutAs("loggedIn"), applyLanguage()
                }
            }
        }
    },
    mainPasswordInput = {
        query: "#thepwd",
        eventListenerType: "keyup",
        callback: async () => {
            hide("#messp")
        }
    },
    showPasswordEyeButtons = [{
        query: "#thepwdeye",
        eventListenerType: "click",
        callback: () => {
            toggleEye("thepwd", "thepwdeye")
        }
    }, {
        query: "#tho",
        eventListenerType: "click",
        callback: () => {
            toggleEye("thetoken", "tho")
        }
    }, {
        query: "#iho",
        eventListenerType: "click",
        callback: () => {
            toggleEye("ipwd", "iho")
        }
    }, {
        query: "#thepwd2eye",
        eventListenerType: "click",
        callback: () => {
            toggleEye("thepwd2", "thepwd2eye")
        }
    }];
document.addEventListener("DOMContentLoaded", (async () => {
    logMe("open", "success"), logMe("language", getLanguage()), setLanguage();
    const e = localStorage.getItem("klo");
    booleanMapper[e] ? (document.getElementById("loko-sign-in").innerHTML = '<span class="footlocker en19"></span>', setLayoutAs("loggedIn"), applyLanguage(), onPPChanged("3")) : onPPChanged("1");
    const t = document.getElementsByClassName("eyeeye");
    for (i = 0; i < t.length; i++) t[i].innerHTML = openEye;
    localStorage.getItem("passwordExist") ? (document.getElementById("signInButton").innerText = "Sign in", document.getElementById("workarea").className = "warea") : (document.getElementById("signInButton").classList.replace("en3", "en88"), applyLanguage())
})), addEvtListener(chooseLanguageEvent), addEvtListener(mainPasswordInput), addEvtListeners(showPasswordEyeButtons), addEvtListener(signInButton), addEvtListener(deletePasswordButton), applyLanguage(), window.navigator.onLine ? localStorage.removeItem("connection") : localStorage.setItem("connection", "off");