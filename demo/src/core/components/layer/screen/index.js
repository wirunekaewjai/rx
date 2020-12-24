"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const clsx_1 = __importDefault(require("clsx"));
const style_1 = __importDefault(require("./style"));
const Comp = ({ id, className, open, closable, children, onClose, }) => {
    function handleClick(e) {
        if (!!closable) {
            if (typeof onClose === 'function' && e.target === e.currentTarget) {
                onClose();
            }
        }
    }
    function handleKeyUp(e) {
        if (typeof onClose === 'function' && e.code === 'Escape') {
            onClose();
        }
    }
    function handleEscape() {
        if (!!closable) {
            window.addEventListener('keyup', handleKeyUp);
            return () => {
                window.removeEventListener('keyup', handleKeyUp);
            };
        }
    }
    react_1.useEffect(handleEscape, [closable]);
    return (jsx_runtime_1.jsx("div", Object.assign({ onClick: handleClick, id: id, className: clsx_1.default(style_1.default.screen, open ? style_1.default.screenOpen : style_1.default.screenClose, className) }, { children: children }), void 0));
};
exports.default = Comp;
