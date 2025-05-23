'use client'

import Link from "next/link"
import CommonInput from "../commonComponents/CommonInput"
import { onChangeInput } from "@/utils/functions/onChangeInput"
import { useState } from "react"

import { singIn } from "./functions/singIn"
import { useRouter } from "next/navigation"

export default function LogInContainer() {
    const router = useRouter()
    const [errors, setErrors] = useState({ email: undefined, password: undefined })
    const [formData, setFromData] = useState({})

    return <div className="bg-black" style={{ height: '100vh', width: '100vw', display: 'flex' }}>
        <div className="flex justify-between px-24 py-8  " style={{ borderRadius: "16px", width: '95vw', height: '90vh', margin: 'auto', backgroundColor: 'rgb(234,247,245)', overflow: "scroll" }}>
            <div>
                <div>
                    <img src={'/logo.png'} height={"75px"} width={'150px'} style={{ marginTop: '-8px', borderRadius: "16px" }}></img>
                </div>
                <div className="pt-12 pb-12">
                    <h3 className="pt-2 pb-2" style={{ fontWeight: 'bold', fontSize: '20px' }}>Welcome back</h3>
                    <p className="">Please enter log in detail below</p>
                </div>
                <div className="mr-8">
                    <CommonInput
                        error={!!errors?.email}
                        errorMessage={errors?.email}
                        className="placeholder-gray-600 focus:placeholder-gray-500 focus:placeholder-blue-600 focus:border-teal-500 focus:outline-none mb-6 w-full"
                        style={{ padding: "20px", borderRadius: '16px', border: '0px', backgroundColor: 'white' }}
                        onChange={(e: any) => onChangeInput(e, setFromData)}
                        name="email"
                        placeholder="Email"
                    />
                    <CommonInput
                        error={!!errors?.password}
                        errorMessage={errors?.password}
                        className="placeholder-gray-600 focus:placeholder-gray-500 focus:placeholder-blue-600 focus:border-teal-500 focus:outline-none mb-6 w-full"
                        style={{ padding: "20px", borderRadius: '16px', border: '0px', backgroundColor: 'white' }}
                        onChange={(e: any) => onChangeInput(e, setFromData)}
                        name="password"
                        type="password"
                        placeholder="password"
                    />
                    <div className="flex justify-end mr-8 mt-4 text-sm" ><p>Forget Password?</p></div>
                    <div className="mr-8 mt-2 ">
                        <button className=" bg-black text-white w-full h-full rounded-md p-4"
                            onClick={(e) => {
                                singIn({ formData, setErrors,router })
                            }}>Sing in</button>
                    </div>
                    <div className="inline-flex items-center justify-center w-full relative">
                        <hr className="w-full mr-8 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                        <span className="absolute px-3 font-medium -translate-x-1/2 text-gray-500  left-1/2  bg-[rgb(234,247,245)] ">or continue</span>

                    </div>
                    <div className="flex justify-center items-center gap-4 mr-8 bg-white py-4 rounded-md border-2 border-gray-500">
                        <div><img height={'20px'} width={'20px'} src={'/download.png'}></img></div>
                        <div className="text-sm">

                            Log in with gmail
                        </div>
                    </div>
                    <div className="flex justify-center text-sm text-gray-500 my-4">

                        don't have an account ?
                        <Link href={'/singup'}>
                            <p className="font-semibold text-black"> Sing up</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div style={{}}>
                <img alt="Log in banner" src={'/logInBanner.png'} style={{ height: '100%', width: '100%', borderRadius: '16px' }}></img>
            </div>
        </div>
    </div>
}