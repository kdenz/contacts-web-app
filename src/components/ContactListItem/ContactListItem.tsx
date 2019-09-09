import React from "react";
import { Container, InfoSection, ActionSection, InfoRow } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faEdit } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";

export interface ContactListItemProps {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  isFavorited: boolean;
}
export const ContactListItem: React.FC<ContactListItemProps> = ({
  id,
  name,
  email,
  phoneNumber,
  isFavorited
}) => {
  return (
    <Container key={id}>
      <InfoSection>
        <InfoRow isBold={true}>{name}</InfoRow>
        <InfoRow>{email}</InfoRow>
        <InfoRow>{phoneNumber}</InfoRow>
      </InfoSection>
      <ActionSection>
        <FontAwesomeIcon
          icon={isFavorited ? faStar : faStarEmpty}
          {...(isFavorited && { color: "#FFD800" })}
        />
        <FontAwesomeIcon icon={faEdit} />
      </ActionSection>
    </Container>
  );
};
