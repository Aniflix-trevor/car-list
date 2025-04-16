// import { child2 } from "child2.jsx"
// const child1 = () => {
//     return (
//         <div>
//             <ul>
//                 <li>
//                     <h1>I love misheveve</h1>
//                 </li>
//             </ul>
//         </div>
//     )
// }
// export default child1

import Child2 from "./Child2";

const Child1 = ({cars}) => {
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {cars.map((car) => (
          <Child2 key={car.id} car={car} />
        ))}
      </ul>
    </div>
  );
};

export default Child1;