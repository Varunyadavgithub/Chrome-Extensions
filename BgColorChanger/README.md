## **Background Color Changer Chrome Extension**

A Chrome extension that allows users to change the background color of any webpage they visit. With a color picker, users can choose any color and apply it to the background of the page. This extension also provides an option to clear the applied background color and revert to the default page style.

## Features

- **Color Picker**: A user-friendly color picker to choose any color you want for the background.
- **Apply Color**: One-click application of the chosen color to the webpage's background.
- **Clear Color**: A button to reset the background color of the page to its original state.
- **Chrome Extension**: Easily integrate the functionality into your browser through a Chrome extension.

## Technologies Used

- **React**: JavaScript library for building the user interface.
- **TypeScript**: Provides type safety and enhances the developer experience with a strongly typed language.
- **Chrome Extension API**: Uses the Chrome extension APIs to manipulate the active tab's background color.
- **Tailwind CSS**: Utility-first CSS framework for styling the extension's interface.
- **React Icons**: For adding the icon functionality within the extension interface.

## Installation

Follow the steps below to install and run the project locally.

### Clone the repository

First, clone the project repository to your local machine:

```bash
git clone https://github.com/Varunyadavgithub/Chrome-Extensions.git
```

### Install dependencies

Navigate to the project folder and install the necessary dependencies:

```bash
cd BgColorChanger
npm install
```

### Build and run the extension locally

1. Open **Chrome** and go to the Extensions page by navigating to `chrome://extensions/` in your browser’s address bar.
2. Enable **Developer Mode** at the top right of the Extensions page.
3. Click on **Load Unpacked**.
4. Select the **background-color-changer-extension** folder on your local machine.
5. The extension icon should now appear in your Chrome toolbar.

### Usage

Once the extension is installed:

1. **Click** on the extension icon in the Chrome toolbar to open the popup.
2. Use the **color picker** to select a color and click **Apply Color** to change the background color of the active webpage.
3. Click the **Clear Color** button to reset the page's background to its default color.
4. Use the **Close** button (cross icon) to close the extension popup.

## Screenshots


## Development Setup

If you want to contribute or make changes to this project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Varunyadavgithub/Chrome-Extensions.git
   ```

2. Navigate to the project directory:

   ```bash
   cd BgColorChanger
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. To build the extension for production:

   ```bash
   npm run build
   ```

### Testing

Since this is a Chrome extension, testing is mainly done by loading the extension into the browser and verifying the functionality:

- After running `npm run build`, load the extension using **Load Unpacked** in Chrome’s Extensions page.
- Test the extension by interacting with the color picker and buttons to ensure the background changes correctly.

## Contribution

Contributions are welcome! Whether it’s fixing bugs, adding new features, or improving the documentation, feel free to fork the repository and create pull requests.

### Steps for contributing:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request with a detailed description of your changes.

## License

This project is open-source and available under the [MIT License](LICENSE).
