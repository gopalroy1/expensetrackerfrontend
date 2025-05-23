'use client'
import { USER_LOG_OUT_URL } from "@/constants/apiUrl"
import axios from "axios"
import { redirect } from "next/navigation"

export default function HomeContainer() {
    return <div>
        <div className="flex justify-end">
            <button className="text-white bg-black px-20 py-2 rounded-md" onClick={async() => {
                console.log(document.cookie)
                await axios.get(USER_LOG_OUT_URL, {
                    withCredentials:true
                })
                redirect('/login')
                //   window.location.href = "/login";
            }}>Log out</button>
        </div>
    </div>
}