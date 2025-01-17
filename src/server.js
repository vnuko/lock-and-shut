import dotenv from "dotenv";
import express from "express";
import path from "path";
import mainRouter from "./routes/mainRouter.js";
import usefulFunctions from "./utils/usefulFunctions.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 9001;
const localIp = usefulFunctions.getLocalIp();

app.use(express.static(path.join(process.cwd(), "public")));

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src", "views"));

app.use("/", mainRouter);

app.listen(port, "0.0.0.0", () => {
  console.log(
    `== Welcome to Lock & Shut!==\n`,
    `You can control this device using the web interface, at: http://${localIp}:${port}\n`,
    `or generate QR code for faster access: http://${localIp}:${port}/qr`
  );
});
