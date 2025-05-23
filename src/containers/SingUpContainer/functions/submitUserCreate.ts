import { USER_SING_UP_URL } from "@/constants/apiUrl";
import { handleZodError } from "@/utils/functions/handleZodError";
import { toastFailure, toastSuccess } from "@/utils/functions/toastifyNotification";
import axios from "axios";
import { z } from "zod";

    export const onSubmitUserCreate = async ({formData,User,setErrors}:{formData:any,User:any,setErrors:any}) => {
        try {
            const payload = { ...formData }
            const data = User.parse(payload);
            console.log(data.userName);
            await axios.post(USER_SING_UP_URL, payload, {
                withCredentials: true
            })
            setErrors({})
            toastSuccess({message:"User created successfully"})
        } catch (error:any) {
            console.error(error)
            if (error instanceof z.ZodError) {
             handleZodError({error,setState:setErrors})
            } else {
                toastFailure({message:error?.response?.data?.message || "Cannot create user"})
            }
        }
    }