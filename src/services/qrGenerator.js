import QRCode from "qrcode";

export async function generateUrlQr(url, size = 300) {
  const options = {
    width: size,
  };

  return await QRCode.toDataURL(url, options);
}
