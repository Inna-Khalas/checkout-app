import * as yup from "yup";

export const checkoutSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^\+?\d{10,15}$/, "Invalid phone number"),
  email: yup.string().email("Invalid email").required("Email is required"),
  company: yup.string(),
  points: yup
    .array()
    .of(
      yup.object({
        location: yup.string().required("Required"),
        time: yup.string(),
      })
    )
    .min(2, "Minimum two points required"),
  date: yup.string().required("Date is required"),
  time: yup.string().required("Time is required"),
  cargoType: yup.string().required("Type required"),
  weight: yup.string(),
  size: yup.object({
    length: yup.string(),
    width: yup.string(),
    height: yup.string(),
  }),
  forwarding: yup.boolean(),
  comment: yup.string().max(4000),
  useCustomPrice: yup.boolean(),
  customPrice: yup.string(),
});
