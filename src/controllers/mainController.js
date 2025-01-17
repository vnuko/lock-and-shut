import osControl from "../services/osControl.js";
import { generateUrlQr } from "../services/qrGenerator.js";

function shutDown(req, res) {
  try {
    osControl.shutdownDevice();
    console.log("Shutting Down...");
    res.status(200).json({
      success: true,
      message: "Shut down signal sent to the device",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while shuting down device: " + error.message,
    });
  }
}

function lock(req, res) {
  try {
    osControl.lockDevice();
    console.log("Locking the device...");
    res.status(200).json({
      success: true,
      message: "Lock signal sent to the device",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while locking device: " + error.message,
    });
  }
}

async function generateQr(req, res, next) {
  try {
    const hostAndPort = req.get("host");
    const baseUrl = `${req.protocol}://${hostAndPort}`;

    const qr = await generateUrlQr(baseUrl);

    res.render("qr", { qr: qr });
  } catch (error) {
    console.error("Error generating QR code:", error);
    next(error);
  }
}

export default { shutDown, lock, generateQr };
