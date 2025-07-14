import Api from '../tools/api';

const api = new Api();

const NUM_RE = /^[0-9.]+$/;

const isCorrect = str => {
    const num = Number(str);
    return NUM_RE.test(str) && !Number.isNaN(num) && num > 0 && str.length > 2 && str.length < 10;
};

const processSequence = ({ value, writeLog, handleSuccess, handleError }) => {
    writeLog(value);

    if (!isCorrect(value)) {
        handleError('ValidationError');
        return;
    }

    const rounded = Math.round(Number(value));
    writeLog(rounded);

    const toBinary = api.get('https://api.tech/numbers/base');
    const fetchAnimal = api.get('https://animals.tech');

    toBinary({ number: String(rounded), from: 10, to: 2 })
        .then(({ result: bin }) => {
            writeLog(bin);
            const len = bin.length;
            writeLog(len);
            const sq = len ** 2;
            writeLog(sq);
            const id = sq % 3;
            writeLog(id);
            return fetchAnimal(String(id));
        })
        .then(({ result }) => handleSuccess(result))
        .catch(() => handleError('APIError'));
};

export default processSequence;
