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

export { range, px }
