import styles from './index.module.sass'
import AuthProvider from "../../components/auth/AuthProvider";
import HomeLayout from "../Home/HomeLayout";
import BasketCard from "./BasketCard/BasketCard";
import Input from "../../components/ui/Input/Input";

const Basket = () => {
    return (
        <AuthProvider>
            <HomeLayout>
                <main className={styles.basket}>
                    <h1>Order Summary</h1>
                    <label>Price can change depending on shipping method and taxes of your state.</label>
                    <div className={styles.basket__cards}>
                        <BasketCard price="1.098" title="iPhone 13 Pro Max"/>
                        <BasketCard price="1.098" title="iPhone 13 Pro Max"/>
                    </div>
                    <Input placeholder="Apply promo code" label="Apply now"/>
                </main>
            </HomeLayout>
        </AuthProvider>
    )
}

export default Basket;