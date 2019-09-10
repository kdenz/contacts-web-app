import React, { memo } from "react";
import { Container } from "./styled";
import { Contact, ContactListItem } from "components/ContactListItem";

export interface ContactListProps {
  data: Contact[];
  onEditClick: (contactToEdit: Contact) => void;
  onFavoriteToggle: (contactToEdit: Contact) => void;
}
export const ContactList: React.FC<ContactListProps> = memo(
  ({ data, onFavoriteToggle, onEditClick }) => {
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
              onFavoriteClick={onFavoriteToggle}
              onEditClick={onEditClick}
            />
          );
        })}
      </Container>
    );
  }
);
