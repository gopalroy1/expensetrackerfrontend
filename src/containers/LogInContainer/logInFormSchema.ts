import { z } from "zod";
import { email } from "zod/v4";

export const LogInFormSchema = z.object({
    email: z.string().email(),
    password:z.string().min(1,'Enter valid password')
})