import { useState } from "react";

function Filter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div className="flex flex-row items-center bg-white p-4 rounded-lg p-[4px]">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
          className="border-2 border-gray-300 rounded-lg p-2 m-2"
        />
      </div>

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
    </div>
  );
}

export default Filter;
