import React, { useCallback } from "react";
import Modal from "react-modal";
import {
  Form,
  Input,
  FieldLabel,
  SubmitButton,
  Title,
  ErrorLabel
} from "./styled";
import useForm from "react-hook-form";
import { contactService } from "services/contactService";

const modalStyles = {
  content: {
    top: "30%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none"
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)"
  }
};

export type Contact = {
  id: string;
  name: string;
  email: string;
  phone?: string;
};

export type ModalState = "edit" | "add" | "none";
export interface AddEditContactModalProps {
  onCancel: () => void;
  state: ModalState;
  onConfirm: (newContact: Contact) => void;
  // This is useful for edit mode to modify existing contact
  currentContact?: Contact;
}
export const AddEditContactModal: React.FC<AddEditContactModalProps> = ({
  onCancel,
  state,
  onConfirm,
  currentContact
}) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = useCallback(
    values => {
      onConfirm({
        // Injects existing or newly generated uuid value into the object for submit
        id: currentContact ? currentContact.id : contactService.generateNewId(),
        name: values.name,
        email: values.email,
        phone: values.phone
      });
    },
    [currentContact, onConfirm]
  );

  const typeText = state === "add" ? "Add" : "Edit";
  return (
    <Modal
      isOpen={state !== "none"}
      onRequestClose={onCancel}
      style={modalStyles}
      // Needed for react-modal to have fade-in and fade-out transitions
      closeTimeoutMS={200}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>{typeText} a contact</Title>

        <FieldLabel>*Name:</FieldLabel>
        {errors.name && <ErrorLabel>Name is required</ErrorLabel>}
        <Input
          name="name"
          type="text"
          ref={register({ required: true })}
          defaultValue={currentContact && currentContact.name}
        />

        <FieldLabel>*Email Address:</FieldLabel>
        {errors.name && <ErrorLabel>Email is required</ErrorLabel>}
        <Input
          name="email"
          type="email"
          ref={register({ required: true })}
          defaultValue={currentContact && currentContact.email}
        />

        <FieldLabel>Phone Number:</FieldLabel>
        <Input
          name="phone"
          type="tel"
          ref={register}
          defaultValue={currentContact && currentContact.phone}
        />

        <SubmitButton type="submit">{typeText} Contact</SubmitButton>
      </Form>
    </Modal>
  );
};
