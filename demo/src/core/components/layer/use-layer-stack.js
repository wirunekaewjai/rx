"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useLayerStack(count = 1) {
    const [index, setIndex] = react_1.useState(0);
    function push() {
        setIndex(Math.min(index + 1, count));
    }
    function pop() {
        setIndex(Math.max(index - 1, 0));
    }
    return [index, push, pop];
}
exports.default = useLayerStack;
