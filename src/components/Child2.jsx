// const child2 = () => {
//     return (
//         <div>
//             <ul>
//                 <h1 key={post.id}>{ }</h1>
//             </ul>
//         </div>
//     )

    
// }
// export default child2

const Child2 = ({ car }) => {
  return (
    <li>
      <h3>
        {car.title} - ID: {car.id}
      </h3>
    </li>
  );
};

export default Child2;