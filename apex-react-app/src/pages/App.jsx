import { useEffect, useState } from "react"

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



  return (
    <>
      <h1>Hello World</h1>
      <div>
        {apexData.map((apxD)=>{
          return(
            <div>
              <ol>
                <li key={apxD.id}>{apxD.title} <br /><br /> {apxD.year} <br /><br /> {apxD.description} <br /><br /> {apxD.image} <br /> {apxD.slug}</li>
              </ol>
              <br />
              <hr />
              <br />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
