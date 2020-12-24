"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_dom_1 = require("react-dom");
const Portal = ({ children }) => {
    const [mounted, setMounted] = react_1.useState(false);
    function handleMount() {
        setMounted(true);
    }
    react_1.useEffect(handleMount, []);
    if (!mounted) {
        return null;
    }
    return react_dom_1.createPortal(children, document.body);
};
exports.default = Portal;
