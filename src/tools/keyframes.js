// eslint-disable-next-line no-undef
const { sheet } = document.head.appendChild(document.createElement('style'));

const join = (strings, keys) => {
    const result = [];
    strings.forEach((str, index) => {
        result.push(str, keys[index]);
    });
    return result.join('');
};

const keyframes = keyframeName => (strings, ...keys) => {
    const raw = join(strings, keys);
    const rule = `@keyframes ${keyframeName}{ ${raw} }`;

    sheet.insertRule(rule, sheet.cssRules.length);
    return keyframeName;
};

export default keyframes;
