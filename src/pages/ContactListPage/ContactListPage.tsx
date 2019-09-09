import React from "react";
import { Container, Header } from "./styled";
import { TabBar } from "components/TabBar";
import { ContactList } from "components/ContactList";

enum TABS {
  ALL = "all",
  FAVORITED = "favorited"
}

const getMockData = () => {
  const result = [];
  let i = 0;
  while (i++ < 100) {
    result.push({
      id: String(i),
      name: "Kaiden",
      email: "ksnz93@gmail.com",
      phoneNumber: "+853 63932808",
      isFavorited: false
    });
  }
  return result;
};

export const ContactListPage: React.FC = () => {
  return (
    <Container>
      <Header>My Contacts</Header>
      <TabBar
        tabs={[
          { key: TABS.ALL, label: "All" },
          { key: TABS.FAVORITED, label: "Favorited" }
        ]}
        activeTab={TABS.ALL}
      />
      <ContactList data={getMockData()} />
    </Container>
  );
};
