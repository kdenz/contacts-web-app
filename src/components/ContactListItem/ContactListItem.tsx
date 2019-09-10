import React, { useCallback, memo } from "react";
import { Container, InfoSection, ActionSection, InfoRow } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faEdit } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import { IconButton } from "components/IconButton";

export interface Contact {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  isFavorited: boolean;
}
export interface ContactListItemProps extends Contact {
  onFavoriteClick: (contact: Contact) => void;
  onEditClick: (contact: Contact) => void;
}
export const ContactListItem: React.FC<ContactListItemProps> = memo(
  ({
    id,
    name,
    email,
    phoneNumber,
    isFavorited,
    onFavoriteClick: onFavoriteClickCb,
    onEditClick: onEditClickCb
  }) => {
    const contactItem = { id, name, email, phoneNumber, isFavorited };

    const onFavoriteClick = useCallback(() => {
      onFavoriteClickCb(contactItem);
    }, [contactItem, onFavoriteClickCb]);

    const onEditClick = useCallback(() => {
      onEditClickCb(contactItem);
    }, [contactItem, onEditClickCb]);

    return (
      <Container key={id}>
        <InfoSection>
          <InfoRow isBold={true}>{name}</InfoRow>
          <InfoRow>{email}</InfoRow>
          <InfoRow>{phoneNumber}</InfoRow>
        </InfoSection>
        <ActionSection>
          <IconButton
            icon={isFavorited ? faStar : faStarEmpty}
            size="1em"
            color={isFavorited ? "#FFD800" : "grey"}
            onClick={onFavoriteClick}
          />
          <IconButton
            icon={faEdit}
            size="1em"
            color="grey"
            onClick={onEditClick}
          />
        </ActionSection>
      </Container>
    );
  }
);
