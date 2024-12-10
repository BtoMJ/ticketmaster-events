import { useForm } from "react-hook-form";
import './SignUpForm.css';

const SignUpForm = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const handleClearClick = () => {
        reset();
    }

    const handleSubmitForm = (data) => {
       console.log(data)
    }

    console.log(errors)

    return(
        <div className="sign-up-container">

            <form onSubmit={handleSubmit(handleSubmitForm)}>
                <label>
                    Nombre
                    <input {...register('name', { required:true })}  />
                </label>
                <br />
                <label>
                    Correo
                    <input {...register('mail', { required:true })}  />
                </label>
                <br />
                <label>
                    Teléfono
                    <input {...register('address', { required:true })}  />
                </label>
                <br />
                <label>
                    Contraseña
                    <input {...register('zipcode', { required:true })}  />
                </label>
                <br />
                <div className="btn-form-container">
                    <button type="button" onClick={handleClearClick}>Limpiar</button>
                    <button type="submit">Enviar</button>
                </div>
            </form>
            <a href="/">Regresar</a>

        </div>
    )
}

export default SignUpForm;





// import { useState } from "react";
// import { useForm } from "react-hook-form";

// const SignUpForm = () => {

//     const { register, handleSubmit } = useForm();

//     const [name, setName] = useState('');
//     const [age, setAge] = useState('');
//     const [address, setAddress] = useState('');
//     const [zipcode, setZipCode] = useState('');
//     const [phone, setPhone] = useState('');

//     const handleClearClick = () => {
//         setName('');
//         setAge('');
//         setAddress('');
//         setZipCode('');
//         setPhone('');
//     }

//     const handleSubmitForm = (e) => {
//         e.prevetDefault();
//     }


//     return(
//         <div>
//             <form onSubmit={handleSubmitForm}>
//                 <label>
//                     Name
//                     <input value={name} onChange={(e) =>{ setName(e.target.value)}} required />
//                 </label>
//                 <br />
//                 <label>
//                     Age
//                     <input value={age} onChange={(e) =>{ setAge(e.target.value)}} required />
//                 </label>
//                 <br />
//                 <label>
//                     Address
//                     <input value={address} onChange={(e) =>{ setAddress(e.target.value)}} required />
//                 </label>
//                 <br />
//                 <label>
//                     Zipcode
//                     <input value={zipcode} onChange={(e) =>{ setZipCode(e.target.value)}} required />
//                 </label>
//                 <br />
//                 <label>
//                     Phone
//                     <input value={phone} onChange={(e) =>{ setPhone(e.target.value)}} required />
//                 </label>
//                 <br />
//                 <div>
//                     <button type="button" onClick={handleClearClick}>Limpiar</button>
//                     <button type="submit">Enviar</button>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default SignUpForm;