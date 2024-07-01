// import React from "react";
// import Comp from "./Comp";
// import { useState } from "react";
// import "./style.css";
// const faqs = [
//   {
//     title: "Where are these chairs assembled?",
//     text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
//   },
//   {
//     title: "How long do I have to return my chair?",
//     text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
//   },
//   {
//     title: "Do you ship to countries outside the EU?",
//     text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
//   },
// ];
// function App() {
//   const [selectedId, setSelectedId] = useState(null);
//   return (
//     <div className="accordion">
//       {faqs.map((item, index) => (
//         <Comp
//           item={item}
//           index={index}
//           selectedId={selectedId}
//           setSelectedId={setSelectedId}
//         />
//       ))}
//     </div>
//   );
// }

// export default App;


// Accordion


import React from 'react'
import Bill from './Bill';
import Service from './Service';
import Total from './Total';
import Reset from './Reset';
import {useState} from 'react';
function App() {
  const [bill , setBill] =useState(0);
  return (
   <>
   <Bill bill = {bill} setBill={setBill}/>
   <br/>
   <Service/>
   <Total bill={bill}/>
   <Reset bill = {bill}/>
   </>
  )
}

export default App