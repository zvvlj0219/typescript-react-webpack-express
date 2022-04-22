"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.post('/api/eh', (req, res) => {
    const value = req.body.text;
    const valueArr = value.split('');
    if (valueArr.indexOf('r') !== -1 ||
        valueArr.indexOf('e') !== -1 ||
        valueArr.indexOf('a') !== -1 ||
        valueArr.indexOf('c') !== -1 ||
        valueArr.indexOf('t') !== -1) {
        return res.status(200).send();
    }
    return res.status(400).send({ message: 'validation error' });
});
// handle production
if (process.env.NODE_ENV === 'production') {
    // static folder
    app.use(express_1.default.static(path_1.default.resolve(__dirname)));
    // handle spa
    app.get('/', (req, res) => {
        res.sendFile(path_1.default.resolve(__dirname, '/index.html'));
    });
}
app.listen(5000, () => {
    console.log(`${process.env.NODE_ENV === 'production'
        ? 'NODE_ENV is production'
        : 'NODE_ENV is development'}`);
    console.log('server running port 5000');
});
