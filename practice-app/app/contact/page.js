'use client'

import React, {useEffect, useState} from 'react';
import styles from "../page.module.css"

const Page = () => {

    const [data,setData] = useState([])

    useEffect(() => {
        (async()=>{
            let res = await fetch('https://dummyjson.com/products');
            let data = await res.json();
            setData(data['products'])
        })()
    }, []);


    return (
        <div>
           <h2 className={styles.pageText}>This is Contact Page</h2>
            {
                data.map((d,i)=>{
                    return(
                        <h2>{d['brand']}</h2>
                    )
                })
            }
        </div>
    );
};

export default Page;