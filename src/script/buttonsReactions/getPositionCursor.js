let getPositionCursor = () => {
    let textarea = document.querySelector("textarea");
    return [textarea.selectionStart, textarea.selectionEnd];
};

export {getPositionCursor};
