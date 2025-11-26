import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';

const Table_ID = "1RO0zPuE133VxwHYOVNxF3B5AFujT9fW2uvXjv5IxtYM"
const Table_Name = '1'
const Table_URL = `https://opensheet.elk.sh/${Table_ID}/${Table_Name}`


function AppItems(){
    const {slug} = useParams();

    const [apexData, setApexData] = useState([])

    useEffect(()=>{
        async function ApexData(){
            try{
                let result = await fetch(Table_URL)
                let resultJSON = await result.json()
                setApexData(resultJSON.filter((data)=>data.slug === slug))
                console.log(resultJSON.filter((data)=>data.slug === slug))
                return resultJSON;
            }catch(err){
                console.log(err)
            }
            }
        ApexData()
    },[])

    //let filteredData = apexData.filter((data)=>data.slug === slug)
    //console.log(filteredData)


    return(
        <>
            {apexData.map(apxD=>{
                return(
                    <div className='individualCard' key={apxD.id}>
                        <h1 className='individualTitle'>{apxD.title}</h1>
                        <p className='individualYear'>{apxD.year}</p>
                        <p className='individualDesc'>{apxD.description}</p>
                        <img className='individualImg' src={apxD.image} alt="" />
                    </div>
                )
            })}
        </>
    )
}

export default AppItems