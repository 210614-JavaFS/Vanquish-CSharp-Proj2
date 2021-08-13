import { useState } from "react";

export const useForm = (callback: any, initialState:any = {}) => {
    const [values, setValues] = useState(initialState);

        // onChange
        const onChange = (event: React.ChangeEvent<any>) => {
            setValues({ ...values, [event.target.name]: 
        event.target.value });
        };

        //onSubmit
        const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            await callback(); // triggering the callback
        };

        return {
            onChange,
            onSubmit,
            values,
        }
}