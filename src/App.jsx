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

import File from "./components/File";

function App() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  // const [filteredCars, setFilteredCars] = useState([]);

  // const filteredCars = cars.filter(
  //   (car) =>
  //     Object.values(car).some((value) =>
  //       value.toString().toLowerCase().includes(searchTerm.toLowerCase())
  //     )
  // Checks all values
  // car.name.toLowerCase().includes(searchTerm.toLowerCase()) || // Checks name
  // car.origin.toLowerCase().includes(searchTerm.toLowerCase()) // Checks origin
  // );
  useEffect(() => {
    fetch("http://localhost:3000/cars")
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

  const filteredCars = cars.filter((car) =>
    Object.values(car).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  if (loading) return <div>Loading...</div>;

  return (
    <div className=" m-4 bg-red-100 p-4 rounded-lg">
      <h1 className="font-bold text-2xl">Car lists</h1>
      <File onAddCar={(newCar) => setCars([...cars, newCar])} />
      <input
        type="text"
        placeholder="Search cars..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border-2 border-gray-300 rounded-lg p-2 m-2 bg-amber-50 p-[2px] m-[20px] rounded-lg"
      />

      <ul className="flex flex-row flex-wrap gap-6 pl-[20px]">
        {filteredCars.map((car) => (
          <li key={car.id}>
            <div className="w-[350px] items-center bg-white pl-4 pr-4 rounded-lg ml-2 mr-2 ">
              <h2>{car.name}</h2>
              <img src={car.image} alt={car.name} className="w-[100%]" />
              <p>{car.origin}</p>
            </div>
          </li>
        ))}
      </ul>
      {/* <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <h2>{car.title}</h2>
          </li>
        ))}
      </ul>
      <Child1 cars={cars} /> */}
      {/* <ul className="flex flex-row flex-wrap">
        {cars.map((car) => (
          <li key={car.id}>
            <div className="w-[300px] items-center bg-white p-4 rounded-lg m-2 ">
              <h2>{car.name}</h2>
              <img src={car.image} alt={car.name} />
              <p>{car.origin}</p>
            </div>
          </li>
        ))}
      </ul> */}
      {/* <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <h2>{car.title}</h2>
          </li>
        ))}
      </ul>
      <Child1 cars={cars} /> */}
    </div>
  );
}

export default App;
