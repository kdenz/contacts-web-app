import React, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, ContainerProps } from "./styled";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface IconButtonProps extends ContainerProps {
  icon: IconProp;
  onClick: () => void;
}
export const IconButton: React.FC<IconButtonProps> = memo(
  ({ icon, color, size, onClick }) => {
    return (
      <Container onClick={onClick} color={color} size={size}>
        <FontAwesomeIcon icon={icon} color={color} />
      </Container>
    );
  }
);
