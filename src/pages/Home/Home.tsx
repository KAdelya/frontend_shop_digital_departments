import styles from './index.module.sass'
import HomeLayout from "./HomeLayout";
import ProductCard from "./ProductCard/ProductCard";
import {ChangeEvent, Key, useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import axios from 'axios';

const Home = () => {
    // const [state, setState] = useState('')
    // const options = {
    //     method: 'GET',
    //     url: "http://127.0.0.1:8000/store",
    //     mode: "no-cors",
    //     withCredentials: false,
    //     headers: {
    //         "Access-Control-Allow-Origin": "*",
    //         "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    //         "Content-Type": "application/json"
    //     }
    // }
    // axios(options)
    //     .then((response) => {
    //         console.log(response);
    //         setState(response.data);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    const [ name, setName] = useState('')
    const [ error, setError] = useState('')

    useEffect(() => {
        fetch('http://localhost:8000/store')
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw Error(`Something went wrong: code ${response.status}`)
                }
            })
            .then(({data}) => {
                console.log(data)
                // setName(data)
            })
            .catch(error => {
                console.log(error)
                setError('Ошибка, подробности в консоли')
            })
    }, [])
    // const [ name, setName] = useState('')
    // const [ error, setError] = useState('')
    // fetch("http://127.0.0.1:8000/store/1", {
    //     mode: 'no-cors',
    //     method: "GET",
    //     headers: {
    //         "Access-Control-Allow-Origin": "*",
    //         "Content-Type": "application/json",
    //     }
    // })
    //     .then((res) => {
    //         return res.json();
    //     })
    //     .then((data) => {
    //         console.log(data);
    //     });

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
    const [searchValue, setSearchValue] = useState('')

    const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }
    const filter = arr.filter((e) => {
        return e.toString().toLowerCase().match(searchValue);
    });
    return (
        <HomeLayout onChange={searchHandler} value={searchValue}>
            {/*{name}*/}
            <div className={styles.home}>
                {filter.map((card, idx) =>
                    <ProductCard key={idx} id={card}/>
                )}
            </div>
        </HomeLayout>
    )
}

export default Home;