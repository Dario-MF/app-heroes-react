import { useState } from 'react';

const useForm = (initialState = {}) => {
    const [formValues, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    };
    const handleValueChange = (e) => {
        setValues({
            ...formValues,
            [e.target.name]: e.target.value 
        });
    };

    return[ formValues, handleValueChange, reset ];
};

export default useForm;