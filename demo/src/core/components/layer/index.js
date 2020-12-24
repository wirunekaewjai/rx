"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const portal_1 = __importDefault(require("../portal"));
const screen_1 = __importDefault(require("./screen"));
const Comp = ({ id, className, open, closable, children, onClose, }) => {
    return (jsx_runtime_1.jsx(portal_1.default, { children: jsx_runtime_1.jsx(screen_1.default, Object.assign({ id: id, className: className, closable: closable, open: open, onClose: onClose }, { children: children }), void 0) }, void 0));
};
exports.default = Comp;
