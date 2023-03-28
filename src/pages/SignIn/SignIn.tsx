import styles from './index.module.sass'
import {Formik, Field, Form} from 'formik';
import {useState} from "react";

const SignIn = () => {
    const [visible, setVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const handleRegistration = (email: string, password: string) => {
    };

    return (
        <div className={styles.signin_page}>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    repeat_password: ''
                }}
                onSubmit={(values: { email: string; password: string; }) => handleRegistration(values.email, values.password)}>
                {({
                      values, errors, touched, handleChange, handleBlur, handleSubmit
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <section className={styles.content}>
                            <h1>Sign In</h1>
                            <div className={styles.content__info}>
                                <div className={styles.content__info__form}>
                                    <input
                                        placeholder='Email'
                                        name='email'
                                        type='email'
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur} />
                                    {touched.email && errors.email && <p>{errors.email}</p>}
                                    {/*{touched.email && !errors.email && setEmail(values.email)}*/}
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
                                    {/*{touched.password && !errors.password && setPass(values.password)}*/}
                                </div>
                            </div>
                            <div className={styles.content__info__button}>
                                <button type='submit'>Sign In</button>
                            </div>
                        </section>
                    </form>)}
            </Formik>
        </div>
    );
}

export default SignIn;