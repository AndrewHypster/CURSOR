async function getRandomChinese(length) {
    let chars = [];
    while (length != 0) {
        const sign = Date.now().toString().slice(-5);
        chars.push(String.fromCharCode(sign));
        length--;
        await new Promise(res => setTimeout(res, 50));
    }
    document.writeln(chars.join(''));
}
getRandomChinese(4);