"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get('/customers', function (req, res) {
    var customers = [
        { id: '1', name: "Jeff" },
        { id: '3', name: "Lucy" }
    ];
    res.json(customers);
});
app.use(function (req, res) {
    res.set('Content-Type', 'text/html');
    res.sendFile(path_1.default.join(__dirname, 'client', 'public', 'index.html'));
});
var port = 5000;
app.listen(port);
