import { useState, useEffect } from "react";
import Items from "./Items";

const url = "https://fetch-hiring.s3.amazonaws.com/hiring.json";

function App() {
  const [data, setData] = useState([]);
  //fetch data from url provided by assignment
  const fetchItems = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      //set state to be json object grabbed by fetch
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  //filter data to exclude objects with blank names
  let filteredArray = data.filter((name) => name.name);

  // sort data by list id and name
  let sortedArray = filteredArray.sort((a, b) => {
    if (a.listId > b.listId) return 1;
    if (a.listId < b.listId) return -1;
    if (parseInt(a.name.split(" ")[1]) > parseInt(b.name.split(" ")[1]))
      return 1;
    if (parseInt(a.name.split(" ")[1]) < parseInt(b.name.split(" ")[1]))
      return -1;
  });

  // console.log("sorted array",sortedArray)

  //use effect hook to run fetchItems function and grab the data needed for application
  useEffect(() => {
    fetchItems();
  }, []);

  //JSX code
  return (
    <main>
      <section id="container">
        <h3>Filtered list sorted by listId and name.</h3>
        {/* map the sorted/ filtered data and return each object as its own item */}
        {sortedArray.map((item, index) => {
          return <Items key={index} {...item}></Items>;
        })}
      </section>
    </main>
  );
}

export default App;
