import React from 'react';

async function getData(){
    let res = await fetch('https://dummyjson.com/products');
    let data = await res.json();
    return (data['products']);
}

const Page = async() => {
    const data = await getData();
    return (
        <div>
            {
                data.map((d,i)=>{
                    return(
                        <>
                            <h2>{d['brand']}</h2>
                            <p>{d['description']}</p>
                            <h4>{d['price']}</h4>
                        </>

                    )
                })
            }
        </div>
    );
};

export default Page;