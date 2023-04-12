import styles from './index.module.sass'
import AuthProvider from "../../components/auth/AuthProvider";
import HomeLayout from "../Home/HomeLayout";
import BasketCard from "./BasketCard/BasketCard";

const Basket = () => {
    return (
        <AuthProvider>
            <HomeLayout>
                <main className={styles.basket}>
                    <h1>Order Summary</h1>
                    <label>Price can change depending on shipping method and taxes of your state.</label>
                    <div className={styles.basket__cards}>
                        <BasketCard/>
                    </div>
                </main>
            </HomeLayout>
        </AuthProvider>
    )
}

export default Basket;