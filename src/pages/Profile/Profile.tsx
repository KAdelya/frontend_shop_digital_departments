import styles from './index.module.sass'
import AuthProvider from "../../components/auth/AuthProvider";

const Prodile = () => {
    return (
        <AuthProvider>
            <div>profile</div>
        </AuthProvider>
    )
}

export default Prodile