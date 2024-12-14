import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Bounce, ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import './Profile.css';

const MyInfo = () => {

    const USER_DATA = 'userData';

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    
    const notifySucces = () => toast.success("Usuario guardado correctamente!", {transition : Bounce});
    const notifyErrorName = () => toast.error("Por favor registra tu nombre!", {transition : Bounce});

    useEffect(() => {
        try{
            const userData = JSON.parse(localStorage.getItem(USER_DATA))  || {};
            setValue('name', userData?.name);
            setValue('mail', userData?.mail);
            setValue('age', userData?.age);
        } catch (error){
            console.log(error)
        }
    } , [])

    // const handleClearClick = () => {
    //     reset();
    // }
    
    const handleSubmitForm = (data) => {

        console.log("DATAAAAA: ",data);

        
        try {
            localStorage.setItem(USER_DATA, JSON.stringify(data));
            notifySucces();
        } catch (error){
            console.error("ERROR: ", error);
        }
        console.log("DATA CORRECTA: ",data)
    }

    console.log("FORM ERROR: ",errors.name);

    if(errors) notifyErrorName()

    return(
        <div className="my-info-container">

            <form onSubmit={handleSubmit(handleSubmitForm)}>
                <label>
                    Nombre
                    <input 
                        {...register('name', { required: true, minLength: 1, maxLength: 50 })}  
                        aria-invalid={errors.name ? "true" : "false"}
                    />
                    {errors.name && <p >El nombre es requerido</p>}
                </label>
                <br />
                <label>
                    Correo
                    <input 
                        {...register('mail', { required: true, minLength: 1, maxLength: 100 })}  
                        aria-invalid={errors.mail ? "true" : "false"}
                        type="email"
                    />
                    {errors.mail && <p >El correo es requerido</p>}
                </label>
                <br />
                <label>
                    Edad
                    <input 
                        {...register('age', { required: true, min: 1, max: 100, valueAsNumber: true })}  
                        type="number"
                        aria-invalid={errors.age ? "true" : "false"}
                    />
                    {errors.age && <p >Hay un error en la edad</p>}
                </label>
                <br />
                <div className="btn-form-container">
                    {/* <button type="button" onClick={handleClearClick}>Limpiar</button> */}
                    <button type="submit">Guardar</button>
                </div>
            </form>
            <ToastContainer />

        </div>
    )
};

export default MyInfo;