import { useForm } from "react-hook-form";

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
        <div>
            <form onSubmit={handleSubmit(handleSubmitForm)}>
                <label>
                    Name
                    <input {...register('name', { required:true })}  />
                </label>
                <br />
                <label>
                    Age
                    <input {...register('age', { required:true })}  />
                </label>
                <br />
                <label>
                    Address
                    <input {...register('address', { required:true })}  />
                </label>
                <br />
                <label>
                    Zipcode
                    <input {...register('zipcode', { required:true })}  />
                </label>
                <br />
                <label>
                    Phone
                    <input {...register('phone', { required:true })}  />
                </label>
                <br />
                <div>
                    <button type="button" onClick={handleClearClick}>Limpiar</button>
                    <button type="submit">Enviar</button>
                </div>
            </form>
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