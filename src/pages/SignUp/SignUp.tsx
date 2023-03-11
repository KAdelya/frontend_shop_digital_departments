import styles from './index.module.sass'
import {Formik, Field, Form} from 'formik';
import {useState} from "react";

const SignUp = () => {
    const [visible, setVisible] = useState(false);

    const handleRegistration = (email: string, password: string) => {
    };

    return (
        <div>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    repeat_password: ''
                }}
                onSubmit={(values: { email: string; password: string; }) => handleRegistration(values.email, values.password)}>
                {({
                      handleSubmit
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <section>
                            <h1>Registration</h1>
                            <div>
                                <div>
                                    <input
                                        placeholder='Email'
                                        name='email'
                                        type='email'/>
                                </div>
                                <div>
                                    <input
                                        placeholder='Password'
                                        name='password'
                                        type='password'/>
                                </div>
                                <div>
                                    <input
                                        placeholder='Repeat password'
                                        name='repeat_password'
                                        type='password'/>
                                </div>
                            </div>
                            <button type='submit'>Sign Up</button>
                        </section>
                    </form>)}
            </Formik>
        </div>
    );
}

export default SignUp