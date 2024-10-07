"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const database_1 = require("firebase/database");
const constants_1 = require("../constants");
const firebase_1 = require("../firebase");
//For env File
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Welcome to Express & TypeScript Server");
});
app.get("/api/config", (req, res) => {
    const vendorId = req.headers["x-vendor-id"];
    if (!vendorId) {
        res.status(400).send("Vendor ID is required");
        return;
    }
    const vendorConfig = constants_1.VENDORS_CONFIG === null || constants_1.VENDORS_CONFIG === void 0 ? void 0 : constants_1.VENDORS_CONFIG[vendorId];
    if (!vendorConfig) {
        res.status(404).send("Vendor not found");
        return;
    }
    res.json(vendorConfig);
});
app
    .route("/api/users")
    .get((req, res) => {
    const vendorId = req.headers["x-vendor-id"];
    if (!vendorId) {
        res.status(400).send("Vendor ID is required");
        return;
    }
    const vendorFirebaseInstance = firebase_1.firebaseConfig === null || firebase_1.firebaseConfig === void 0 ? void 0 : firebase_1.firebaseConfig[vendorId];
    if (!vendorFirebaseInstance) {
        res.status(404).send("Vendor not found");
        return;
    }
    (0, database_1.get)((0, database_1.child)((0, database_1.ref)(vendorFirebaseInstance.db), "users"))
        .then((snapshot) => {
        if (snapshot.exists()) {
            const value = snapshot.val();
            res.json(value ? Object.values(snapshot.val()) : []);
        }
        else {
            res.json([]);
        }
    })
        .catch((error) => {
        console.error(error);
        res.status(500).send("Internal Server Error");
    });
})
    .delete((req, res) => {
    const vendorId = req.headers["x-vendor-id"];
    if (!vendorId) {
        res.status(400).send("Vendor ID is required");
        return;
    }
    const vendorFirebaseInstance = firebase_1.firebaseConfig === null || firebase_1.firebaseConfig === void 0 ? void 0 : firebase_1.firebaseConfig[vendorId];
    if (!vendorFirebaseInstance) {
        res.status(404).send("Vendor not found");
        return;
    }
    try {
        const userName = req.body.name;
        // remove(ref(vendorFirebaseInstance.db, `users/${userName}`));
        (0, database_1.set)((0, database_1.ref)(vendorFirebaseInstance.db, `users/${userName}`), null);
        res.json({
            message: "User deleted successfully",
            payload: { name: userName },
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
})
    .post((req, res) => {
    const vendorId = req.headers["x-vendor-id"];
    if (!vendorId) {
        res.status(400).send("Vendor ID is required");
        return;
    }
    const vendorFirebaseInstance = firebase_1.firebaseConfig === null || firebase_1.firebaseConfig === void 0 ? void 0 : firebase_1.firebaseConfig[vendorId];
    if (!vendorFirebaseInstance) {
        res.status(404).send("Vendor not found");
        return;
    }
    try {
        const userName = req.body.name;
        (0, database_1.set)((0, database_1.ref)(vendorFirebaseInstance.db, `users/${userName}`), {
            name: userName,
        });
        res.json({
            message: "User created successfully",
            payload: { name: userName },
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});
app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});
module.exports = app;
