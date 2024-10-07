import cors from "cors";
import dotenv from "dotenv";
import express, { Application, Request, Response } from "express";
import { child, get, ref, set } from "firebase/database";
import { VENDORS_CONFIG } from "../constants";
import { firebaseConfig } from "../firebase";

//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(
  cors((request, callback) => {
    callback(null, {
      origin: true,
    }); //
  })
);
app.options(
  "*",
  cors((request, callback) => {
    callback(null, {
      origin: true,
    }); //
  })
);

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  next();
});

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

app.get("/api/config", (req: Request, res: Response) => {
  const vendorId = req.headers["x-vendor-id"] as string;

  if (!vendorId) {
    res.status(400).send("Vendor ID is required");

    return;
  }

  const vendorConfig = VENDORS_CONFIG?.[vendorId];

  if (!vendorConfig) {
    res.status(404).send("Vendor not found");

    return;
  }

  res.json(vendorConfig);
});

app
  .route("/api/users")
  .get((req, res) => {
    const vendorId = req.headers["x-vendor-id"] as string;

    if (!vendorId) {
      res.status(400).send("Vendor ID is required");

      return;
    }

    const vendorFirebaseInstance = firebaseConfig?.[vendorId];

    if (!vendorFirebaseInstance) {
      res.status(404).send("Vendor not found");

      return;
    }

    get(child(ref(vendorFirebaseInstance.db), "users"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const value = snapshot.val();
          res.json(value ? Object.values(snapshot.val()) : []);
        } else {
          res.json([]);
        }
      })
      .catch((error) => {
        console.error(error);

        res.status(500).send("Internal Server Error");
      });
  })
  .delete((req, res) => {
    const vendorId = req.headers["x-vendor-id"] as string;

    if (!vendorId) {
      res.status(400).send("Vendor ID is required");

      return;
    }

    const vendorFirebaseInstance = firebaseConfig?.[vendorId];

    if (!vendorFirebaseInstance) {
      res.status(404).send("Vendor not found");

      return;
    }

    try {
      const userName = req.body.name;

      // remove(ref(vendorFirebaseInstance.db, `users/${userName}`));
      set(ref(vendorFirebaseInstance.db, `users/${userName}`), null);

      res.json({
        message: "User deleted successfully",
        payload: { name: userName },
      });
    } catch (error) {
      console.error(error);

      res.status(500).send("Internal Server Error");
    }
  })
  .post((req: Request<{ name: string }>, res) => {
    const vendorId = req.headers["x-vendor-id"] as string;

    if (!vendorId) {
      res.status(400).send("Vendor ID is required");

      return;
    }

    const vendorFirebaseInstance = firebaseConfig?.[vendorId];

    if (!vendorFirebaseInstance) {
      res.status(404).send("Vendor not found");

      return;
    }

    try {
      const userName = req.body.name;

      set(ref(vendorFirebaseInstance.db, `users/${userName}`), {
        name: userName,
      });

      res.json({
        message: "User created successfully",
        payload: { name: userName },
      });
    } catch (error) {
      console.error(error);

      res.status(500).send("Internal Server Error");
    }
  });

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

module.exports = app;
