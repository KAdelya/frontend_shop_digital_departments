import styles from './index.module.sass'
import AuthProvider from "../../components/auth/AuthProvider";

const Basket = () => {
    return (
        <AuthProvider>
            <div>basket</div>
        </AuthProvider>
    )
}

export default Basket