import { z } from "zod";

export const User = z.object({
    userName: z.string().min(2, "Minimum 2 character req"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Minimum 6 characters"),
    mobileNumber: z.string().min(10, "Mobile must be 10 digits"),
    terms:z.string()
});