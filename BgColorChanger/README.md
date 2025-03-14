## 🎨 **Background Color Changer Chrome Extension**  

A Chrome extension that allows users to change the background color of any webpage they visit. With a color picker, users can choose any color and apply it to the background of the page. This extension also provides an option to clear the applied background color and revert to the default page style.  

## 🖼 Screenshots  

![Screenshot 2025-03-14 160644](https://github.com/user-attachments/assets/5d0b221f-8f12-4c5e-a862-9bc161f8ee6d)  

## ✨ Features  

- 🎮 **Color Picker** – A user-friendly color picker to choose any color for the background.  
- 🎨 **Apply Color** – One-click application of the chosen color to the webpage's background.  
- 🔄 **Clear Color** – A button to reset the background color of the page to its original state.  
- 🖥 **Chrome Extension** – Easily integrate the functionality into your browser.  

---

## 🛠 Technologies Used  

- ⚛️ **React** – JavaScript library for building the user interface.  
- ⌨️ **TypeScript** – Provides type safety and enhances the developer experience.  
- 🌐 **Chrome Extension API** – Uses Chrome extension APIs to manipulate the active tab's background color.  
- 🎨 **Tailwind CSS** – Utility-first CSS framework for styling.  
- 🔍 **React Icons** – Adds icons to the extension interface.  

---

## 💽 Installation  

Follow the steps below to install and run the project locally.  

### 📂 Clone the repository  

```bash
git clone https://github.com/Varunyadavgithub/Chrome-Extensions.git
```

### 📦 Install dependencies  

```bash
cd BgColorChanger
npm install
```

### 🚀 Build and run the extension locally  

1. Open **Chrome** and go to the Extensions page by navigating to `chrome://extensions/`.  
2. Enable **Developer Mode** (top right corner).  
3. Click on **Load Unpacked**.  
4. Select the **background-color-changer-extension** folder.  
5. The extension icon should now appear in your Chrome toolbar.  

---

## 🖱 Usage  

1. **Click** on the extension icon in the Chrome toolbar to open the popup.  
2. Use the **color picker** 🎨 to select a color and click **Apply Color** ✅ to change the background.  
3. Click the **Clear Color** ❌ button to reset the page’s background.  
4. Use the **Close** ❎ button to close the extension popup.  

---

## ⚙ Development Setup  

For contributing or making changes, follow these steps:  

1. **Clone the repository** 🛠  

   ```bash
   git clone https://github.com/Varunyadavgithub/Chrome-Extensions.git
   ```

2. **Navigate to the project directory** 📂  

   ```bash
   cd BgColorChanger
   ```

3. **Install the dependencies** 📦  

   ```bash
   npm install
   ```

4. **Start the development server** 🚀  

   ```bash
   npm run dev
   ```

5. **Build the extension for production** 🏗  

   ```bash
   npm run build
   ```

---

## ✅ Testing  

Since this is a Chrome extension, testing is mainly done by loading the extension into the browser and verifying functionality:  

- After running `npm run build`, load the extension using **Load Unpacked** in Chrome’s Extensions page.  
- Test by interacting with the color picker and buttons to ensure the background changes correctly.  

---

## 🤝 Contribution  

Contributions are welcome! 🎉 If you want to improve this project, fix bugs, or add new features, follow these steps:  

1. **Fork the repository** 🍴  
2. **Create a feature branch** (`git checkout -b feature-branch`) 🌱  
3. **Commit your changes** (`git commit -m 'Add new feature'`) 🗒  
4. **Push to the branch** (`git push origin feature-branch`) 🚀  
5. **Open a pull request** 🛠  

---

## 📜 License  

This project is open-source and available under the [MIT License](LICENSE).  
