import { z } from "zod"

const phoneRegex = new RegExp(
    /^(\+\d{1,3}[- ]?)?\d{10}$/
);
const gstRegex = new RegExp(
    /^([0][1-9]|[1-2][0-9]|[3][0-8])[A-Z]{3}[ABCFGHLJPTF]{1}[A-Z]{1}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}/
);

const isNonWhiteSpace = new RegExp(/^\S*$/)
const isContainsUppercase = new RegExp(/^(?=.*[A-Z]).*$/)
const isContainsLowercase = new RegExp(/^(?=.*[a-z]).*$/)
const isContainsNumber = new RegExp(/^(?=.*[0-9]).*$/)
const isContainsSymbol = new RegExp(/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/)
const isValidLength = new RegExp(/^.{8,14}$/)

export const FormDataSchema = z.object({
    owner: z.string().min(1, "Owner name is required"),
    mobile: z.string().min(10, "Mobile Number is required").regex(phoneRegex, 'Invalid Number!'),
    email: z
        .string()
        .min(1, "Email is required")
        .email("Invalid email address"),
    store_name: z.string().min(1, "Store name is required"),
    gst_no: z.string().min(1, "GST Number is required").regex(gstRegex, 'Invalid GST No.!'),
    country: z.string().min(1, "Country is required"),
    street: z.string().min(1, "Street is required"),
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),
    zip: z.string().min(1, "Zip is required"),
    password: z.string().min(1, "Password is required").regex(isNonWhiteSpace, "Password must not contain Whitespaces.").regex(isContainsUppercase, "Password must have at least one Uppercase Character.").regex(isContainsLowercase, "Password must have at least one Lowercase Character.").regex(isContainsNumber, "Password must contain at least one Digit.").regex(isContainsSymbol, "Password must contain at least one Special Symbol.").regex(isValidLength, "Password must be 8-4 Characters Long.")
})
