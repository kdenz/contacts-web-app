import React, { useState, useEffect } from "react";
import { Container, Header } from "./styled";
import { TabBar } from "components/TabBar";
import { ContactList, ContactListProps } from "components/ContactList";
import { contactService } from "services/contactService";

const TABS = {
  ALL: "all",
  FAVORITED: "favorited"
};

// For getting mock contacts data
// const getMockData = () => {
//   const result = [];
//   let i = 0;
//   while (i++ < 100) {
//     result.push({
//       id: String(i),
//       name: "Kaiden",
//       email: "ksnz93@gmail.com",
//       phoneNumber: "+853 63932808",
//       isFavorited: false
//     });
//   }
//   return result;
// };

export const ContactListPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(TABS.ALL);
  const [contacts, setContacts] = useState<ContactListProps["data"]>([]);

  // Initializes contacts var based on locally stored contacts
  useEffect(() => {
    const storedContacts = contactService.loadContacts();
    if (storedContacts.length > 0) {
      // If there're existing locally stored contacts, load it to contacts state var
      setContacts(storedContacts);
    }
  }, []);

  const onTabClick = (clickedTab: string) => {
    if (activeTab !== clickedTab) {
      setActiveTab(clickedTab);
    }
  };

  return (
    <Container>
      <Header>My Contacts</Header>
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
      <ContactList data={contacts} />
    </Container>
  );
};
