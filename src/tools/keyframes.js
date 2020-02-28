const style = document.createElement('style');
const { sheet } = document.head.appendChild(style);

const join = (strings, keys) => {
    const result = [];
    strings.forEach((str, index) => {
        result.push(str, keys[index]);
    });
    return result.join('');
};

const exist = keyframeName => {
    return !!Array.from(sheet.cssRules).find(
        cssRule => keyframeName === cssRule.name,
    );
};

const keyframes = keyframeName => (strings, ...keys) => {
    if (!exist(keyframeName)) {
        const cssText = `@keyframes ${keyframeName}{ ${join(strings, keys)} }`;
        sheet.insertRule(cssText, sheet.cssRules.length);
    }
    return keyframeName;
};

export default keyframes;
