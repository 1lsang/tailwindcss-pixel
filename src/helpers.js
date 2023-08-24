function range(start, stop, step = 1) {
    return Array.from(
        { length: (stop - start) / step + 1 },
        (_, i) => start + i * step
    );
}

function px(start = 0, stop = 1024, step = 1, suffix = 'px') {
    return {
        ...range(start, stop, step).reduce((acc, px) => {
            acc[`${px}${suffix ? suffix : ''}`] = `${px}px`
            return acc;
        }, {}),
    }
}

function pxr(start = 0, stop = 1024, step = 1, suffix = 'pxr') {
    return {
        ...range(start, stop, step).reduce((acc, px) => {
            acc[`${px}${suffix ? suffix : ''}`] = pxToRem(px);
            return acc;
        }, {}),
    };
}

function pxToRem(px, base = 16) {
    return `${px / base}rem`;
}

export { range, px, pxr }
