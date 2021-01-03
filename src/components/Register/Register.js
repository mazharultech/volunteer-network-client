import React from 'react';
import { useForm } from "react-hook-form";
import './Resgister.css';

const Register = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className="volunteer-register">
      <div className="form-container">
      <h3>Register as a Volunteer</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className="form-control" name="firstName" placeholder="Full Name" ref={register({ required: true, maxLength: 20 })} required />
        <br/>
        <input className="form-control" name="lastName" placeholder="Username or Email" ref={register({ pattern: /^[A-Za-z]+$/i })} required/>
        <br/>
        <input className="form-control" type="date" placeholder="Date" name="" id="" required/>
        <br/>
        <input className="form-control" type="text" name="" placeholder="Description" id=""/>
        <br/>
        <input className="form-control" type="text" name="" placeholder="Organize book at the library" id=""/>
        <br/>
        <input type="submit" value="Registration" />
      </form>
      </div>
    </div>
  );
};

export default Register;