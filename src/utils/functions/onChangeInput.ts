export const onChangeInput = (e:any,setValue:any) => {
    const { name, value } = e?.target
    setValue((prev:any) => {
        return {
            ...prev,
            [name]:value
        }
    })
}