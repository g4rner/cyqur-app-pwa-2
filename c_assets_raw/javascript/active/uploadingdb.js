function updateThumbnail(e, r) {
    /* let t = e.querySelector(".drop-zone__thumb");
    e.querySelector(".drop-zone__prompt") && e.querySelector(".drop-zone__prompt").remove(),  */

    Object.keys(r).map((function(n, a) {
        t = document.createElement("div"), t.classList.add("drop-zone__thumb"), e.appendChild(t), t.dataset.label = r[n] .name, t.innerHTML += r[n].name
    }))
}
document.querySelectorAll(".drop-zone__input").forEach((e => {
    const r = e.closest(".drop-zone");
    r.addEventListener("click", (r => {
        e.click()
    })), e.addEventListener("change", (t => {
        e.files.length && updateThumbnail(r, e.files)
    })), r.addEventListener("dragover", (e => {
        e.preventDefault(), r.classList.add("drop-zone--over")
    })), ["dragleave", "dragend"].forEach((e => {
        r.addEventListener(e, (e => {
            r.classList.remove("drop-zone--over")
        }))
    })), r.addEventListener("drop", (t => {
        t.preventDefault(), t.dataTransfer.files.length && (e.files = t.dataTransfer.files, updateThumbnail(r, t.dataTransfer.files)), r.classList.remove("drop-zone--over")
    }))
}));
