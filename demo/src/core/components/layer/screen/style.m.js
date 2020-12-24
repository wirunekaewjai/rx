"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const css_1 = __importStar(require("@wirunekaewjai/css"));
exports.default = css_1.default `
module-screen {
  ${css_1.p.transition('opacity')};

  display: flex;

  align-items: center;
  justify-content: center;

  position: fixed;

  left: 0;
  right: 0;

  top: 0;
  bottom: 0;

  width: 100%;
  height: 100%;

  overflow: hidden;
}

module-screenOpen {
  opacity: 1;
}

module-screenClose {
  pointer-events: none;
  opacity: 0;
}
`;
