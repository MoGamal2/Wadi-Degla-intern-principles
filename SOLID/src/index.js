"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const contactInfo1 = { name: "John Doe", phoneNumber: "123-456-7890", address: "123 Main St" };
const contactInfo2 = { name: "Jane Smith", phoneNumber: "987-654-3210", address: "456 Elm St" };

// Example usage
console.log(contactInfo1);
console.log(contactInfo2);

// Implementation of a function to display contact information
function displayContactInfo(contact) {
  console.log(`Name: ${contact.name}`);
  console.log(`Phone Number: ${contact.phoneNumber}`);
  console.log(`Address: ${contact.address}`);
}

// Display contact information for both contacts
displayContactInfo(contactInfo1);
displayContactInfo(contactInfo2);