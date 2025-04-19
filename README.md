File onAddCar={(newCar) => setCars([...cars, newCar])} 

-This code recieves data from the file.jxs through the onAddCar and places the data in the cars, when one is adding to the existing cars it is through the argument newcar and is added at the end of the array.Then stored in the json through the onAddCar again.
And the onAddCar uses a call back function which is {(newCar) => setCars([...cars, newCar])} 