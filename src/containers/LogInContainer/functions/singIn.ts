 
import axios from "axios"
import { LogInFormSchema } from "../logInFormSchema"
import { toastFailure, toastSuccess } from "@/utils/functions/toastifyNotification"
import { handleZodError } from "@/utils/functions/handleZodError"
import { z } from "zod"
import { USER_LOG_IN_URL } from "@/constants/apiUrl"
import { Router } from "next/router"

export  const singIn = async({formData,setErrors,router}:{formData:any,setErrors:any,router:any}) => {
        try {
            const payload = { ...formData }
            const data = LogInFormSchema.parse(payload)
            await axios.post(USER_LOG_IN_URL, data,{withCredentials:true})
            toastSuccess({message:"Log in successfully"})
            router.push('/home')
        } catch (error) {
            console.log(error)
            console.error("Error while sing in",error)
            if (error  instanceof z.ZodError) {
                handleZodError({error,setState:setErrors})
            }
            else {
                toastFailure({message:"Incorrect password try again!"})
            }
            
        }
    }