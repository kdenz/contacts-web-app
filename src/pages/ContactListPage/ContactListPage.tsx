import React from "react";
import { Container, Header } from "./styled";
import { TabBar } from "components/TabBar";

enum TABS {
  ALL = "all",
  FAVORITED = "favorited"
}

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
    </Container>
  );
};
