function changeBackground (value, type) {
    type === "keyup" ?
        document.querySelector(`[data-value-key = ${value}]`).classList.remove("button-active") :
        document.querySelector(`[data-value-key = ${value}]`).classList.add("button-active");
}

export {changeBackground};