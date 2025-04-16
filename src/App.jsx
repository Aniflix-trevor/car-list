
// import  child1  from "./components/child1"
// import './App.css'

// function App() {
//   const [post, setPost] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3001/posts")
//       .then(response => response.json())
//       .then(data => {
//         setPosts(data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error("error getting data:", error);
//         setLoading(false);
//       });
//   }, []);//run once
//   if (loading) return <div>Loading...</div>;

//   return (<div>
//     <h1>Car lists</h1>
//     <ul>
//       {posts.map(post => (
//         <li key={post.id}>
//           <h2>{post.title }</h2>
//         </li>
//       ))}
//     </ul>
//   </div>)
// }

// export default App

import { useState, useEffect } from "react";
import Child1 from "./components/Child1";
import File from "./components/File";
import "./App.css";

function App() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/cars")
      .then((response) => response.json())
      .then((data) => {
        setCars(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Car lists</h1>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <h2>{car.title}</h2>
          </li>
        ))}
      </ul>
      <Child1 cars={cars} />
    </div>
  );
}

export default App;
