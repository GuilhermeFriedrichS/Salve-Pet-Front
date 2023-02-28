function limitText(text, max){
    return text.slice(0, max) + (text.length > max ? "..." : "");
}

export default limitText