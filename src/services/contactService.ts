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

export const contactService = {
  loadContacts,
  storeContacts
};
