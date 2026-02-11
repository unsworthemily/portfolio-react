/* import React, { use, useEffect } from "react";

function API() {
  const [joke, setJoke] = useState([]);
  const fetchData = async () => {

    try {
      const response = await fetch("https://official-joke-api.appspot.com/random_joke");
      const data = await response.json();
      setJoke(data);
    } 
    catch (error) {
      console.error("Error fetching data:", error);
    };
  };
  
  /* useEffect(() => {fetchData();}, []); */
  
  /*const generateJoke = () => {
    fetchData();
  };

  return(
    <div>
      <h1>API</h1>
      <button onClick={generateJoke}> Generate joke</button>
      <p>Setup: {joke.setup}</p>
      <p>Punchline: {joke.punchline}</p>
    </div>
  );
};

export default API;
*/
