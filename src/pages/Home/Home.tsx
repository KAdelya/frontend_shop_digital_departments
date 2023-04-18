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
    //     url: "http://127.0.0.1:8000/store/",
    // }
    // axios(options)
    //     .then((response) => {
    //         console.log(response);
    //         setState(response.data);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });


    // const [ name, setName] = useState('')
    // const [ error, setError] = useState('')
    //
    // useEffect(() => {
    //     fetch('http://127.0.0.1:8000/store/')
    //         .then(response => {
    //             console.log(response)
    //             if (response.ok) {
    //                 var gfghj = response.json();
    //                 console.log(JSON.stringify(gfghj))
    //                 return gfghj
    //             } else {
    //                 throw Error(`Something went wrong: code ${response.status}`)
    //             }
    //         })
    //         .then(({data}) => {
    //             console.log(data)
    //             // setName(data)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //             setError('Ошибка, подробности в консоли')
    //         })
    // }, [])


    const [name, setName] = useState('')
    const [error, setError] = useState('')
    const [names, setNames] = useState(Object)
    const [obje, setObject] = useState(Object)
    fetch("http://127.0.0.1:8000/store/", {
        method: "GET"
    })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            let obj: any = {};
            var cdata = Object.keys(data);
            for (let i = 0; i < cdata.length; i++) {
                obj[i] = data[cdata[i]];
            }
            // setName(data);
            setNames(cdata);
            // setCountProduct(cdata.length);
            // console.log(Object.keys(data).length)
            setObject(obj);
            console.log(obj);
        });

    const arr = []
    const arr2: any[] = []
    // while (names.length >= 0) {
    //     arr.push(names.length++);
    // }
    // console.log(names.length)
    for (let i = 0; i < names.length; i++) {
        arr.push(names[i]);
        arr2.push(obje[i][2]);
    }
    // for (let i = 0; i < names.length; i++) {
    //     arr2.push(obje[i][2]);
    // }
    const [searchValue, setSearchValue] = useState('')

    const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }
    const filter = arr.filter((e) => {
        return e.toString().toLowerCase().match(searchValue);
    });
    return (
        <HomeLayout onChange={searchHandler} value={searchValue}>
                <div className={styles.home}>
                {filter.map((card, idx) =>
                    arr2.map((card2) =>
                    <ProductCard key={idx} id={card} cost={card2}/>
                ))}
            </div>
        </HomeLayout>
    )
}

export default Home;