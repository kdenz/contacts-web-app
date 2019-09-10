import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Container, Header, HeaderTitle } from "./styled";
import { TabBar } from "components/TabBar";
import { ContactList, ContactListProps } from "components/ContactList";
import { contactService } from "services/contactService";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "components/IconButton";
import {
  AddEditContactModal,
  ModalState
} from "components/AddEditContactModal";
import { Contact } from "components/ContactListItem";

const TABS = {
  ALL: "all",
  FAVORITED: "favorited"
};

export const ContactListPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(TABS.ALL);
  const [addEditContactModalState, setAddEditContactModalState] = useState<
    ModalState
  >("none");
  const [contactToEdit, setContactToEdit] = useState<Contact>();
  const [contacts, setContacts] = useState<ContactListProps["data"]>([]);

  // Initializes contacts var based on locally stored contacts
  useEffect(() => {
    const storedContacts = contactService.loadContacts();
    if (storedContacts.length > 0) {
      // If there're existing locally stored contacts, load it to contacts state var
      setContacts(storedContacts);
    }
  }, []);

  // Changes tab on tab click ONLY if it's different
  const onTabClick = useCallback(
    (clickedTab: string) => {
      if (activeTab !== clickedTab) {
        setActiveTab(clickedTab);
      }
    },
    [activeTab]
  );

  // Returns filtered contacts
  const filteredContacts = useMemo(() => {
    if (activeTab === TABS.FAVORITED) {
      return contacts.filter(contact => contact.isFavorited === true);
    }
    return contacts;
  }, [contacts, activeTab]);

  const onAddButtonClick = useCallback(() => {
    setContactToEdit(undefined);
    setAddEditContactModalState("add");
  }, []);

  const onEditButtonClick = useCallback((contactToEdit: Contact) => {
    setContactToEdit(contactToEdit);
    setAddEditContactModalState("edit");
  }, []);

  const onAddEditContactModalClose = useCallback(() => {
    setAddEditContactModalState("none");
  }, []);

  const onAddEditContactModalConfirm = useCallback(
    (updatedContact: Contact) => {
      setAddEditContactModalState("none");
      // stores the updated contact
      const updatedContacts = contactService.storeContact(updatedContact);
      // updates UI display
      setContacts(updatedContacts);
    },
    []
  );

  const onFavoriteToggle = useCallback((contactForToggle: Contact) => {
    // stores the isFavorited toggled contact
    const updatedContacts = contactService.storeContact({
      ...contactForToggle,
      isFavorited: !contactForToggle.isFavorited
    });
    // updates UI display
    setContacts(updatedContacts);
  }, []);

  return (
    <>
      <Container>
        <Header>
          <HeaderTitle>My Contacts</HeaderTitle>
          <IconButton
            icon={faPlusCircle}
            size="1em"
            color="#8e2de2"
            onClick={onAddButtonClick}
          />
        </Header>
        <TabBar
          tabs={[
            { key: TABS.ALL, label: "All" },
            {
              key: TABS.FAVORITED,
              label: "Favorited"
            }
          ]}
          activeTab={activeTab}
          onTabClick={onTabClick}
        />
        <ContactList
          data={filteredContacts}
          onEditClick={onEditButtonClick}
          onFavoriteToggle={onFavoriteToggle}
        />
      </Container>
      <AddEditContactModal
        state={addEditContactModalState}
        onCancel={onAddEditContactModalClose}
        onConfirm={onAddEditContactModalConfirm}
        currentContact={contactToEdit}
      />
    </>
  );
};
