import { useState } from "react";


const CarForm = ({ onAddCar }) => {
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    origin: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onAddCar(formData); // Call the onAddCar prop to pass the form data to the parent component
//     setFormData({ image: "", name: "", origin: "" }); // Clear the form after submission
//   };

const handleSubmit = (e) => {
  e.preventDefault();

  // Send data to backend
  fetch("http://localhost:3000/cars", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then((data) => {
      onAddCar(data); // Pass the saved car (with ID) to App
      setFormData({ image: "", name: "", origin: "" }); // Reset form
    })
    .catch((err) => console.error("Error adding car:", err));
};


  return (
    <div className="flex flex-raw items-center  bg-white p-4 rounded-lg p-[4px] w-[65%]">
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          name="name"
          placeholder="Car Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border-2 border-gray-300 rounded-lg p-2 m-2"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          required
          className="border-2 border-gray-300 rounded-lg p-2 m-2"
        />
        <input
          type="text"
          name="origin"
          placeholder="Car Origin"
          value={formData.origin}
          onChange={handleChange}
          required
          className="border-2 border-gray-300 rounded-lg p-2 m-2"
        />
        <button
          type="submit"
          className="bg-amber-300 p-5 w-[100px] h-[40px] p-[2px] rounded-2xl"
        >
          Add Car
        </button>
       
      </form>
    </div>
  );
};

export default CarForm;
