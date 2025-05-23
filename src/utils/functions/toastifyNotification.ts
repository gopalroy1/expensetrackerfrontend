import { toast } from "react-toastify"

export const toastSuccess = ({ message }: { message: string | undefined }) => {
    
    console.log("inside toast sucess")
    toast.success(message)

}
export const toastFailure = ({message}:{message:string | undefined}) => {
    toast.error(message)

}