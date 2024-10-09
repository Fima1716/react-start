# Accordion Menu with QR Code Generator

## Description

This project is an accordion component that contains a menu with a QR code generator. Users can enter text in an input field, and upon clicking a button, a QR code will be generated and displayed below the input field.

## Technologies

- React
- CSS
- QRCode.react (library for generating QR codes)

## Installation

1. Clone the repository:
   git clone https://github.com/your-username/your-repository.git

2. Navigate to the project directory:
   cd your-repository

3. Install dependencies:
   npm install

## Usage

1. Click the "Click to Open" button to expand the menu.
2. Enter text in the input field.
3. Click the "Generate QR" button to create the QR code.
4. The generated QR code will be displayed below the input field.

## Components

### AccordeonMenu

This component is responsible for displaying the accordion and managing its state. It includes:

- A button to open/close the menu.
- An embedded component `QrCodeGenerator`, which is responsible for generating the QR code.

### QrCodeGenerator

This component allows the user to enter text and generates a QR code based on the entered text. Key features:

- An input field for text.
- A button to generate the QR code.
- Displaying the QR code if text is entered.

## Example Usage

    import { AccordeonMenu } from './AccordeonMenu';

function App() {
return (

<div className="App">
<AccordeonMenu />
</div>
);
}
