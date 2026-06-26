import * as Yup from "yup";

export const contactSchema = Yup.object({
  name: Yup.string()
    .min(3, "Minimum 3 characters")
    .required("Name is required"),

  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),

  subject: Yup.string()
    .required("Subject is required"),

  message: Yup.string()
    .min(10, "Minimum 10 characters")
    .required("Message is required"),
});