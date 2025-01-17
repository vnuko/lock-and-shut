import os from "os";
import usefulFunctions from "../utils/usefulFunctions.js";

function lockDevice() {
  const platform = os.platform();

  try {
    if (platform === "win32") {
      usefulFunctions.lockWindows();
    } else if (platform === "darwin") {
      usefulFunctions.lockMacOS();
    } else if (platform === "linux") {
      usefulFunctions.lockLinux();
    } else {
      console.error(`Unsupported platform: ${platform}`);
      throw new Error(`Locking is not supported on platform: ${platform}`);
    }
  } catch (error) {
    console.error("Error while locking device:", error.message);
    throw error;
  }
}

function shutdownDevice() {
  const platform = os.platform();

  try {
    if (platform === "win32") {
      usefulFunctions.shutdownWindows();
    } else if (platform === "darwin") {
      usefulFunctions.shutdownMacOS();
    } else if (platform === "linux") {
      usefulFunctions.shutdownLinux();
    } else {
      console.error(`Unsupported platform: ${platform}`);
      throw new Error(
        `Shutting down is not supported on platform: ${platform}`
      );
    }
  } catch (error) {
    console.error("Error while shutting down device:", error.message);
    throw error;
  }
}

export default { lockDevice, shutdownDevice };
