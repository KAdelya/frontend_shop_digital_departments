import styles from './index.module.sass'
import {Formik, Field, Form} from 'formik';
import {useState} from "react";

const SignUp = () => {
    const [visible, setVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const handleRegistration = (email: string, password: string, repeat_password: string) => {
        // fetch('http://localhost:8000/register/', {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({email: email, password: password, repeat_password: repeat_password})
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data)
        //         // setPass(data.password);
        //         // setEmail(data.email);
        //     });
    };

    return (
        <div className={styles.registration_page}>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    repeat_password: ''
                }}
                onSubmit={(values: { email: string; password: string; repeat_password: string;}) => handleRegistration(values.email, values.password, values.repeat_password)}>
                {({
                      values, errors, touched, handleChange, handleBlur, handleSubmit
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <section className={styles.content}>
                            <h1>Registration</h1>
                            <div className={styles.content__info}>
                                <div className={styles.content__info__form}>
                                    <input
                                        placeholder='Email'
                                        name='email'
                                        type='email'
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>
                                    {touched.email && errors.email && <p>{errors.email}</p>}
                                </div>
                                <div className={styles.content__info__form}>
                                    <input
                                        placeholder='Password'
                                        name='password'
                                        type='password'
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>
                                    {touched.password && errors.password && <p>{errors.password}</p>}
                                </div>
                                <div className={styles.content__info__form}>
                                    <input
                                        placeholder='Repeat password'
                                        name='repeat_password'
                                        type='password'
                                        value={values.repeat_password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>
                                    {touched.repeat_password && errors.repeat_password &&
                                    <p>{errors.repeat_password}</p>}
                                </div>
                            </div>
                            <div className={styles.content__info__button}>
                                <button type='submit'>Sign Up</button>
                            </div>
                        </section>
                    </form>)}
            </Formik>
        </div>
    );
}

export default SignUp;