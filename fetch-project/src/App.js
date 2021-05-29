import './App.css';
import { useState, useEffect } from "react";
import Items from "./Items"

const url = "https://fetch-hiring.s3.amazonaws.com/hiring.json";

function App() {
  const [data, setData] = useState([]);
  const fetchItems = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data)
      console.log(data.filter((name) => name.name))

    } catch(error){
      console.log(error);
    }
  };

  let filteredArray = data.filter((name) => name.name)

  let sortedArray =  filteredArray.sort((a , b) => {
    if(a.listId > b.listId) return 1;
    if(a.listId < b.listId) return -1;
    if(parseInt(a.name.split(" ")[1]) > parseInt(b.name.split(" ")[1])) return 1;
    if(parseInt(a.name.split(" ")[1]) < parseInt(b.name.split(" ")[1])) return -1;  }) 

  console.log("sorted array",sortedArray)
 

  useEffect(() => {
    fetchItems();
  }, [])
  return (
    <main>
    <section id='container'>
      <h3>
        Filtered list sorted by listId and name.
      </h3>
      {sortedArray.map((item, index) => {
        return (
      <Items key={index} {...item} >

     </Items>
        )
      })}
     
    </section>
    </main>
  );
}

export default App;
