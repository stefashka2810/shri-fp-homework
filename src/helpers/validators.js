export const allPass = fns => (...args) => fns.every(fn => fn(...args));

const propEq = (prop, value) => obj => obj[prop] === value;

const countByColor = ({ star, square, triangle, circle }) =>
    [star, square, triangle, circle]
        .reduce((acc, c) => ({ ...acc, [c]: (acc[c] ?? 0) + 1 }), {});

export const validateFieldN1 = allPass([
    propEq('star',    'red'),
    propEq('square',  'green'),
    propEq('circle',  'white'),
    propEq('triangle','white'),
]);


export const validateFieldN2 = shapes =>
    countByColor(shapes).green >= 2;


export const validateFieldN3 = shapes => {
    const cnt = countByColor(shapes);
    return (cnt.red ?? 0) === (cnt.blue ?? 0);
};


export const validateFieldN4 = allPass([
    propEq('circle',  'blue'),
    propEq('star',    'red'),
    propEq('square',  'orange'),
]);


export const validateFieldN5 = shapes => {
    const cnt = countByColor(shapes);
    return Object.entries(cnt)
        .some(([color, n]) => color !== 'white' && n >= 3);
};


export const validateFieldN6 = shapes => {
    const cnt = countByColor(shapes);
    return (
        cnt.green === 2 &&
        shapes.triangle === 'green' &&
        (cnt.red ?? 0) === 1
    );
};


export const validateFieldN7 = shapes =>
    Object.values(shapes).every(color => color === 'orange');


export const validateFieldN8 = shapes =>
    shapes.star !== 'red' && shapes.star !== 'white';


export const validateFieldN9 = shapes =>
    Object.values(shapes).every(color => color === 'green');


export const validateFieldN10 = shapes =>
    shapes.triangle === shapes.square && shapes.triangle !== 'white';
