import os from "os";
import { exec } from "child_process";

function getLocalIp() {
  const networkInterfaces = os.networkInterfaces();

  const preferredInterfaces = {
    win32: ["Wi-Fi", "Ethernet"],
    darwin: ["en0", "en1"],
    linux: ["wlan0", "wlp1s0", "eth0", "enp0s3"],
  };

  const platform = os.platform();
  const preferred = preferredInterfaces[platform] || [];

  for (const iface of preferred) {
    if (networkInterfaces[iface]) {
      for (const addr of networkInterfaces[iface]) {
        if (addr.family === "IPv4" && !addr.internal) {
          return addr.address;
        }
      }
    }
  }

  for (const iface in networkInterfaces) {
    for (const addr of networkInterfaces[iface]) {
      if (addr.family === "IPv4" && !addr.internal) {
        return addr.address;
      }
    }
  }

  return undefined;
}

function lockWindows() {
  exec("rundll32.exe user32.dll,LockWorkStation", (error) => {
    if (error) {
      console.error("Failed to lock Windows device: ", error.message);
      throw new Error(error.message);
    } else {
      console.log("Windows device locked.");
    }
  });
}

function lockMacOS() {
  exec(
    "/System/Library/CoreServices/Menu\\ Extras/User.menu/Contents/Resources/CGSession -suspend",
    (error) => {
      if (error) {
        console.error("Failed to lock Mac device:", error.message);
        throw new Error(error.message);
      } else {
        console.log("Mac device locked.");
      }
    }
  );
}

function lockLinux() {
  exec(
    "xdg-screensaver lock || gnome-screensaver-command -l || dm-tool lock",
    (error) => {
      if (error) {
        console.error("Failed to lock Linux device:", error.message);
        throw new Error(error.message);
      } else {
        console.log("Linux device locked.");
      }
    }
  );
}

export default { getLocalIp, lockWindows, lockMacOS, lockLinux };
