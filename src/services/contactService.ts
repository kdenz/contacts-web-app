import { Contact } from "components/ContactListItem";

const CONTACTS_KEY = "contacts";

const loadContacts = (): Contact[] => {
  try {
    const storedContacts = localStorage.getItem(CONTACTS_KEY);
    return storedContacts ? JSON.parse(storedContacts) : [];
  } catch (err) {
    console.error(err);
    alert(err);
    return [];
  }
};

const storeContact = (updatedContact: Contact) => {
  const currentContacts = loadContacts();
  // Tries to find existing contact
  const existingContactIndex = currentContacts.findIndex(
    item => item.id === updatedContact.id
  );
  // If found, replace it with the new Contact object
  if (existingContactIndex > -1) {
    currentContacts[existingContactIndex] = updatedContact;
  } else {
    // Not found, so it's a new Contact, just add to the beginning of the array
    currentContacts.unshift(updatedContact);
  }

  localStorage.setItem(CONTACTS_KEY, JSON.stringify(currentContacts));
  return currentContacts;
};

// Generates new id using https://stackoverflow.com/a/44078785/3637651
// Which 'If ID's are generated more than 1 millisecond apart, they are 100% unique.'
const generateNewId = () => {
  let uniqueId =
    Math.random()
      .toString(36)
      .substring(2) + Date.now().toString(36);
  return uniqueId;
};

export const contactService = {
  loadContacts,
  storeContact,
  generateNewId
};
