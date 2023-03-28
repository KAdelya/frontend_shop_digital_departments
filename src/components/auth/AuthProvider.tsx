import {FC} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {Navigate} from "react-router-dom";

const AuthProvider: FC<any> = ({children}) => {
    const isAuth = useSelector((state: RootState) => state.user.isAuth)
    if (!isAuth) {
        return <Navigate to="/signin" />
    }
    return children
}

export default AuthProvider;