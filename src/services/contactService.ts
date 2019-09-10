import { ContactListProps } from "components/ContactList";

const CONTACTS_KEY = "contacts";

const loadContacts = (): ContactListProps["data"] => {
  try {
    const storedContacts = localStorage.getItem(CONTACTS_KEY);
    return storedContacts ? JSON.parse(storedContacts) : [];
  } catch (err) {
    console.error(err);
    alert(err);
    return [];
  }
};

const storeContacts = (contacts: ContactListProps["data"]) => {
  localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
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
  storeContacts,
  generateNewId
};
