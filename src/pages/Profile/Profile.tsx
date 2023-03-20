import styles from './index.module.sass'
import AuthProvider from "../../components/auth/AuthProvider";
import ProfileHeader from "./header/ProfileHeader";

const Prodile = () => {
    return (
        <AuthProvider>
            <div>
                <ProfileHeader/>
            </div>
        </AuthProvider>
    )
}

export default Prodile