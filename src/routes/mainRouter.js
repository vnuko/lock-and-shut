import express from "express";
import mainController from "../controllers/mainController.js";

const router = express.Router();

router.get("/", (req, res) => {
  const hostAndPort = req.get("host");
  const baseUrl = req.protocol + "://" + hostAndPort;

  res.render("index", { baseUrl: baseUrl, url: hostAndPort });
});

router.post("/lock", mainController.lock);
router.post("/shut-down", mainController.shutDown);
router.get("/qr", mainController.generateQr);

export default router;
