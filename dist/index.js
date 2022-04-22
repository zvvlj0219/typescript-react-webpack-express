"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var path_1 = __importDefault(require("path"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.post('/api/eh', function (req, res) {
    var value = req.body.text;
    var valueArr = value.split('');
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
    app.get('*', function (req, res) {
        res.sendFile(path_1.default.resolve(__dirname, './index.html'));
    });
}
var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("NODE_ENV is ".concat(process.env.NODE_ENV));
    console.log("server running port 5000 at http://localhost:".concat(port));
});
