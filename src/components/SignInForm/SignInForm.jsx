import { useForm } from "react-hook-form";
import './SignInForm.css';

const SignInForm = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const handleClearClick = () => {
        reset();
    }

    const handleSubmitForm = (data) => {
       console.log(data)
    }

    console.log(errors)

    return(
        <div className="sign-in-container">
            
            <form onSubmit={handleSubmit(handleSubmitForm)}>
                <label>
                    Correo
                    <input {...register('mail', { required:true })}  />
                </label>
                <br />
                <br />
                <label>
                    Contraseña
                    <input {...register('pass', { required:true })}  />
                </label>
                <br />
                <div className="btn-form-container">
                    <button type="button" onClick={handleClearClick}>Limpiar</button>
                    <button type="submit">Entrar</button>
                </div>
            </form>
            <a href="/">Regresar</a>

        </div>
    )
}

export default SignInForm;