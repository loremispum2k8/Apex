import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Table_ID = "1RO0zPuE133VxwHYOVNxF3B5AFujT9fW2uvXjv5IxtYM"
const Table_Name = '1'
const Table_URL = `https://opensheet.elk.sh/${Table_ID}/${Table_Name}`

function App() {

  const [apexData, setApexData] = useState([])

  useEffect(()=>{
    async function ApexData(){
      try{
        let result = await fetch(Table_URL)
        let resultJSON = await result.json()
        setApexData(resultJSON)
        return resultJSON;
      }catch(err){
        console.log(err)
      }
    }
    ApexData()
  },[])



  //id title year description image slug
  return (
      <div className="cardContainer">
        {apexData.map((apxD)=>{
          return(
            <Link to={`/${apxD.slug}`}>
            <div key={apxD.id} className="card">
              <div className="textCard">
                <h1 className="title">{apxD.title}</h1>
                <p className="year">{apxD.year}</p>
                <h2 className="description">{apxD.description}</h2>
              </div>
              <img src={apxD.image} alt="" />
            </div>
            </Link>
          )
        })}
      </div>
  )
}

export default App
