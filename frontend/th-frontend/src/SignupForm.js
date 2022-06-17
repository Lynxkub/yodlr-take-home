import React , {useState} from 'react';
import Database from './db';


const SignupForm = () => {

    const INITIAL_STATE = {
        id : '',
        email : '',
        firstName : '',
        lastName : '',
        state : ''
    }
    const [formData , setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const {name , value} = e.target;
        setFormData(formData => ({
            ...formData , 
            [name] : value
        }))
    }

    const handleSubmit = async (e) => {
            e.preventDefault();
            await Database.signUp(formData);
            alert(`${formData.email} has been added`)
            setFormData(INITIAL_STATE); 
    }

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <label htmlFor = 'email'>Email</label>
                <input 
                type = 'email'
                placeholder = 'email'
                value = {formData.email}
                name = 'email'
                onChange = {handleChange}
                />
                 <label htmlFor = 'firstName'>First Name</label>
                <input 
                type = 'text'
                placeholder = 'first name'
                value = {formData.firstName}
                name = 'firstName'
                onChange = {handleChange}
                />
                 <label htmlFor = 'lastName'>Last Name</label>
                <input 
                type = 'text'
                placeholder = 'last name'
                value = {formData.lastName}
                name = 'lastName'
                onChange = {handleChange}
                />
            <button type ='submit'>Submit</button>
            </form>
        </div>
    )
}


export default SignupForm;

