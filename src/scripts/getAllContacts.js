import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
    try {
        // Read the contacts from the database file
        const data = await fs.readFileSync(PATH_DB, 'utf8');
        return JSON.parse(data);
      } catch (err) {
        console.error('Error reading database file:', err);
        return [];
      }
};

console.log(await getAllContacts());
