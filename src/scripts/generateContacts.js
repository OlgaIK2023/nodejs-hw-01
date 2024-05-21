import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

const generateContacts = async (number) => {
    try {
        // Load existing contacts from the database
        const data = await fs.readFile(PATH_DB, 'utf8');
        const existingContacts = JSON.parse(data);
    
        // Generate new contacts
        const newContacts = [];
        for (let i = 0; i < number; i++) {
          const newContact = createFakeContact();
          newContacts.push(newContact);
        }
        // Combine new contacts with existing ones
    const updatedContacts = existingContacts.concat(newContacts);

    // Write the updated contacts back to the database file
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));

    console.log(`${number} contacts added successfully.`);
  } catch (error) {
    console.error('Error:', error);
  }
};

await generateContacts(5);
export default generateContacts;
