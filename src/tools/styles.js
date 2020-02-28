// eslint-disable-next-line no-undef
const { sheet } = document.head.appendChild(document.createElement('style'));

let i = 0;
const generateName = prefix => {
    i += 1;
    return `${prefix}-${i}`;
};

const join = (strings, keys) => {
    const result = [];
    strings.forEach((str, index) => {
        result.push(str, keys[index]);
    });
    return result.join('');
};

export const css = (strings, ...keys) => {
    const className = generateName('fakeui-style');
    const raw = join(strings, keys);
    const rule = `.${className} { ${raw} }`;

    sheet.insertRule(rule, sheet.cssRules.length);
    return className;
};

export const keyframes = (strings, ...keys) => {
    const keyframeName = generateName('fakeui-keyframe');
    const raw = join(strings, keys);
    const rule = `@keyframes ${keyframeName}{${raw}}`;

    sheet.insertRule(rule, sheet.cssRules.length);
    return keyframeName;
};
