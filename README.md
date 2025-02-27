# Lock&Shut

**Lock&Shut** is a Node.js and Express-powered application that allows you to remotely lock or shut down your PC using a web interface.

## Demo

![Demo Image](demo.jpg)

## Features

- **Remote Lock and Shutdown:** Control your PC remotely with just two buttons: **Lock** and **Shut Down**.
- **Web Interface:** Access the app from any device via a web browser.
- **Mobile-Friendly Access:** QR code helps you to access to the web interface on mobile devices easier.
- **Lightweight and Easy to Use:** Simple setup with minimal dependencies.

## How It Works

1. **Start the Server:** Run the Node.js Express app on the PC (Windows, Mac, Linux) you want to control.
2. **Web Interface:** Open the web interface from any device connected to the same network.
3. **Control Options:** Use the interface to lock or shut down the PC remotely.

## Requirements

- Node.js (v14 or later)
- NPM

## Installation and Usage

1. **Clone the Repository:**

   ```bash
   git clone git@github.com:vnuko/lock-and-shut.git
   cd lock-and-shut
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run the Application:**

   - Start the server:
     ```bash
     npm start
     ```
   - Start the server in development mode (with live reload using Nodemon):
     ```bash
     npm run dev
     ```

4. **Access the Web Interface:**

   - Open your browser and navigate to `http://<your-pc-ip>:9001`.
   - The QR code displayed on the web interface provides a quick URL for mobile access.

5. **Set your custom port if needed:**
   - go to .env file and modify the PORT as needed

## Web Interface

The web interface features:

- **Lock Button:** Lock your PC remotely.
- **Shut Down Button:** Power off your PC.
- **QR Code:** Scan it to open the interface URL on your mobile device.

## Important: Mac and Linux System Configuration for Shutdown

To ensure the shutdown functionality works on your system:

#### **Option 1: Edit the `sudoers` File (Recommended)**

1. Open the `sudoers` file for editing:

   ```bash
   sudo visudo
   ```

2. Add the following line to allow the user running the app to execute the shutdown command without a password:

   ```bash
   # Linux
   username ALL=(ALL) NOPASSWD: /sbin/shutdown
   ```

   ```bash
   # Mac OS
   username ALL=(ALL) NOPASSWD: /usr/sbin/shutdown
   ```

   Replace username with the name of the user running the Node.js application.

#### **Option 2: Run app as sudo user**

```bash
sudo npm start
```

## License

This project is licensed under the MIT License.
