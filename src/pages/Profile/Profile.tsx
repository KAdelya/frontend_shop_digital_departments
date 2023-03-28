import styles from './index.module.sass'
import AuthProvider from "../../components/auth/AuthProvider";
import ProfileHeader from "./header/ProfileHeader";
import card1 from '../../assets/images/Credit1.png'
import card2 from '../../assets/images/Credit2.png'
import card3 from '../../assets/images/Credit3.png'
import TestGraph from "./echarts/TestGraph";
import TestBarChacrt from "./echarts/BarChart";
import Footer from "../../components/footer/Footer";

const Profile = () => {
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        }
    ];
    const data2 = [...data].filter( el => el.amt > 2200 )
    return (
        <AuthProvider>
            <div className={styles.profile}>
                <ProfileHeader/>
                <h1>Overview</h1>
                <ul>
                    <li style={{display: 'flex'}}>
                        <TestBarChacrt color="#2469EB" data={data}/>
                        <TestBarChacrt color="#894ced" data={data2}/>
                    </li>
                    <li><TestGraph/></li>
                </ul>
                <h1>Cards</h1>
                <div className={styles.profile__cards}>
                    <img src={card1}/>
                    <img src={card2}/>
                    <img src={card3}/>
                </div>
            </div>
            <Footer/>
        </AuthProvider>
    )
}

export default Profile;