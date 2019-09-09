import React from "react";
import { Container } from "./styled";
import {
  ContactListItemProps,
  ContactListItem
} from "components/ContactListItem";

export interface ContactListProps {
  data: ContactListItemProps[];
}
export const ContactList: React.FC<ContactListProps> = ({ data }) => {
  return (
    <Container>
      {data.map(contact => {
        return (
          <ContactListItem
            id={contact.id}
            name={contact.name}
            email={contact.email}
            phoneNumber={contact.phoneNumber}
            isFavorited={contact.isFavorited}
          />
        );
      })}
    </Container>
  );
};
