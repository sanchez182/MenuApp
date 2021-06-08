import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startLogin,startRegister } from '../../actions/auth';
import Swal from 'sweetalert2';

import './login.css';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    console.log("koko")
    const [ formLoginValues, handleLoginInputChange ] = useForm({
        lEmail: 'sachez.arisan@gmail.com',
        lPassword: '1234'
    });

    const [ formRegisterValues, handleRegisterInputChange ] = useForm({
        rName: 'Nando',
        rEmail: 'nando@gmail.com',
        rPassword1: '123456',
        rPassword2: '123456'
    });
    
    const { lEmail, lPassword } = formLoginValues;
    const { rName, rEmail, rPassword1, rPassword2 } = formRegisterValues;

    const handleLogin = ( e ) => {
        e.preventDefault();
        dispatch( startLogin( lEmail, lPassword ) );
    }

    const handleRegister = ( e ) => {
        e.preventDefault();

        if ( rPassword1 !== rPassword2 ) {
            return Swal.fire('Error', 'Las contraseñas deben de ser iguales','error');
        }
       dispatch( startRegister( rEmail, rPassword1, rName ) );
    }


    return (
        <div className="container login-container">
            <div className="row">
         
                <div className="col-md-6 login-form-2">
                <h3>Ingreso</h3>
                    <form onSubmit={ handleLogin }>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="lEmail"
                                value={ lEmail }
                                onChange={ handleLoginInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="lPassword"
                                value={ lPassword }
                                onChange={ handleLoginInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}