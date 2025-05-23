'use client'

import { useState } from "react"
import CommonInput from "../commonComponents/CommonInput"
import { onChangeInput } from "@/utils/functions/onChangeInput"
import { onSubmitUserCreate } from "./functions/submitUserCreate"
import { FormError } from "./utils/types";
import { User } from "./utils/formSchema";
import { defaultSingUpFormValues } from "./const";
import Link from "next/link";



export default function SingUpContainer() {
    const [formData, setFromData] = useState(defaultSingUpFormValues)
    const [errors, setErrors] = useState<FormError>({})


    return <div className="bg-black" style={{ height: '100vh', width: '100vw', display: 'flex' }}>
        <div className="flex justify-between px-24 py-8  " style={{ borderRadius: "16px", width: '95vw', height: '90vh', margin: 'auto', backgroundColor: 'rgb(234,247,245)', overflow: 'scroll' }}>
            <div>
                <div>
                    <div>
                        <img src={'/logo.png'} height={"75px"} width={'150px'} style={{ marginTop: '-8px', borderRadius: "16px" }}></img>
                    </div>
                    <div className="py-8-12 pb-12">
                        <h3 className="pt-2 pb-2" style={{ fontWeight: 'bold', fontSize: '20px' }}>Get Started today!</h3>
                        <p className="">Join today and take first step to better manage your finance</p>
                    </div>
                    <div className="mr-8">
                        <CommonInput
                            error={!!errors?.userName}
                            errorMessage={errors?.userName}
                            className="placeholder-gray-600 focus:placeholder-gray-500 focus:placeholder-blue-600 focus:border-teal-500 focus:outline-none mb-6 w-full"
                            style={{ padding: "20px", borderRadius: '16px', border: '0px', backgroundColor: 'white' }}
                            onChange={(e: any) => onChangeInput(e, setFromData)}
                            name="userName"
                            placeholder="Username"
                        />
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
                            error={!!errors?.mobileNumber}
                             errorMessage={errors?.mobileNumber}
                            className="placeholder-gray-600 focus:placeholder-gray-500 focus:placeholder-blue-600 focus:border-teal-500 focus:outline-none mb-6 w-full"
                            style={{ padding: "20px", borderRadius: '16px', border: '0px', backgroundColor: 'white' }}
                            onChange={(e: any) => onChangeInput(e, setFromData)}
                            name="mobileNumber"
                            type="number"
                            placeholder="mobile"
                        />
                        <CommonInput
                            error={!!errors?.password}
                            errorMessage={errors?.password}
                            className="placeholder-gray-600 focus:placeholder-gray-500 focus:placeholder-blue-600 focus:border-teal-500 focus:outline-none mb-6 w-full"
                            style={{ padding: "20px", borderRadius: '16px', border: '0px', backgroundColor: 'white' }}
                            onChange={(e: any) => onChangeInput(e, setFromData)}
                            name="password"
                            placeholder="password"
                        />                    </div>
                    <div className="flex gap-4">
                        <CommonInput name="terms" error={!!errors?.terms} errorMessage={errors?.terms} type="checkbox"onChange={(e: any) => onChangeInput(e, setFromData)}/>
                        <span>I agree to the terms and conditions</span>
                    </div>
                    <div className="mr-8 mt-2 ">
                        <button type="submit" className=" bg-black text-white w-full h-full rounded-md p-4"
                            onClick={() => {
                                onSubmitUserCreate({ formData, setErrors, User })
                            }}>Create account</button>
                    </div>
                    <div className="flex justify-center text-sm text-gray-500 my-4">

                        Already Have an account?
                        <Link href={'/login'}>
                        <p className="font-semibold text-black"> log in</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div style={{}}>
                <img alt="Log in banner" src={'/logInBanner.png'} style={{ height: '100%', width: '100%', borderRadius: '16px' }}></img>
            </div>
        </div>
    </div >
}