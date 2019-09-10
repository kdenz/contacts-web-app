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

export interface AddEditContactModalProps {
  isOpen: boolean;
  onCancel: () => void;
  type: "edit" | "add";
  currentName?: string;
  currentEmail?: string;
  currentPhone?: string;
}
export const AddEditContactModal: React.FC<AddEditContactModalProps> = ({
  isOpen,
  onCancel,
  type,
  currentName,
  currentEmail,
  currentPhone
}) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = useCallback(values => {
    alert(values);
  }, []);

  const typeText = type === "add" ? "Add" : "Edit";
  return (
    <Modal
      isOpen={isOpen}
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
          defaultValue={currentName}
        />

        <FieldLabel>*Email Address:</FieldLabel>
        {errors.name && <ErrorLabel>Email is required</ErrorLabel>}
        <Input
          name="email"
          type="email"
          ref={register({ required: true })}
          defaultValue={currentEmail}
        />

        <FieldLabel>Phone Number:</FieldLabel>
        <Input
          name="phone"
          type="tel"
          ref={register}
          defaultValue={currentPhone}
        />

        <SubmitButton type="submit">{typeText} Contact</SubmitButton>
      </Form>
    </Modal>
  );
};
