"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./App.css");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { customers: [] };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        var _this = this;
        fetch('/customers')
            .then(function (res) { return res.json(); })
            .then(function (loadedCustomers) { return _this.setState({ customers: loadedCustomers }); });
    };
    App.prototype.render = function () {
        return (react_1.default.createElement("div", { className: "App" }, this.state.customers.map(function (customer) {
            return react_1.default.createElement("li", { key: customer.id }, customer.name);
        })));
    };
    return App;
}(react_1.default.Component));
exports.default = App;
