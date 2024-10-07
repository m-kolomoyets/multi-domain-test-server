"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseConfig = void 0;
const vendor_x_1 = __importDefault(require("./vendor-x"));
const vendor_y_1 = __importDefault(require("./vendor-y"));
const constants_1 = require("../constants");
exports.firebaseConfig = {
    [constants_1.VENDORS.vendorX]: vendor_x_1.default,
    [constants_1.VENDORS.vendorY]: vendor_y_1.default,
};
