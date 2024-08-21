
// import { IoMdSend } from "react-icons/io";
// import { useState } from "react";
// import { messages } from "./Array";
// import { IoCall, IoVideocam } from "react-icons/io5";
// import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

// function Body({ selectedPerson, people,personId }) {
//   const [inputValue, setInputValue] = useState("");
//   const [itemsArray, setItemsArray] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);
//   const [openStates, setOpenStates] = useState([]);

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleDelete = (index) => {
//     const newArray = itemsArray.filter((_, i) => i !== index);
//     setItemsArray(newArray);
//     const newOpenStates = openStates.filter((_, i) => i !== index);
//     setOpenStates(newOpenStates);
//   };

//   const handleEdit = (index) => {
//     setInputValue(itemsArray[index]);
//     setEditIndex(index);
//   };

//   const handleClick = (index) => {
//     const newOpenStates = [...openStates];
//     newOpenStates[index] = !newOpenStates[index];
//     setOpenStates(newOpenStates);
//   };

//   const addItems = () => {
//     if (inputValue.trim() !== "") {
//         if (editIndex !== null) {
//             const updatedArray = [...itemsArray];
//             updatedArray[editIndex] = inputValue;
//             setItemsArray(updatedArray);
//             setEditIndex(null);
//         } else {
//             setItemsArray([...itemsArray, inputValue]);
//             setOpenStates([...openStates, false]);

//             // Update chat data for the selected person in localStorage
//             const updatedPerson = { ...selectedPerson };
//             const obj = {
//                 id: updatedPerson.chat.length,
//                 text: inputValue,
//                 timestamp: new Date().toLocaleString(), 
//                 src: selectedPerson.imgSrc 
//             };

//             updatedPerson.chat.push(obj);

// people[personId].push(updatedPerson)
// console.log("🚀 ~ addItems ~ people:", people)
//             localStorage.setItem(`person`, JSON.stringify(people));
//             console.log(updatedPerson);
//         }
       
//         setInputValue("");

//         setTimeout(() => {
//             document.getElementById("scroll-bottom").scrollIntoView({
//                 behavior: "smooth",
//             });
//         }, 0);
//     }
// };
//   return (
//     <div className="max-h-svh overflow-x-hidden overflow-y-auto">
//       <div className="w-full bg-slate-700 h-16 flex items-center fixed z-30">
//         {selectedPerson ? (
//           // Show details of selected person if available
//           <>
//             <img
//               src={selectedPerson.imgSrc}
//               className="w-16 h-16 object-cover rounded-full p-2"
//               alt="Profile"
//             />
//             <h1 className="text-white ml-4">{selectedPerson.name}</h1>
//           </>
//         ) : (
//           <h1 className="text-white ml-4">Select a person to chat</h1>
//         )}

//         <div className="flex justify-end items-center w-[70%] fixed">
//           <IoCall size={25} className="text-white" />
//           <IoVideocam size={25} className="text-white ml-10" />
//         </div>
//       </div>

//       {/* Display messages */}
//       <ul className="flex-grow mt-20">
//         <div className="mt-20">
//           {selectedPerson?.chat?.map((message, index) => (
//             <div
//               key={index}
//               className={`mb-2 p-3 ml-10 mr-10 mob:m-5 tab:m-5 bg-slate-200 rounded-md max-w-fit mob:max-w-[97%] lg:max-w-[600px] ${
//                 index % 2 === 0
//                   ? "float-left clear-both"
//                   : "float-right clear-both bg-red-400"
//               }`}
//             >
//               <div className="flex items-center">
//                 <img
//                   src={message?.src}
//                   alt="Message visual"
//                   className="w-10 h-10 object-cover rounded-full"
//                 />
//                 <div className="ml-2">
//                   <p className="text-xs">
//                   {new Date(message?.timestamp).toLocaleTimeString()}
//                   </p>
//                   <p className="p-2 rounded-md">{message?.text}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//          {/* {/* {itemsArray.map((item, index) => (
//           <li
//             key={index}
//             className="flex w-full justify-self-end items-center relative mob:ml-0 lg:ml-auto lg:mr-[20px] mob:max-w-[97%] lg:max-w-[600px]"
//           >
//             <div className="mob:mr-5 absolute right-0 max-w-fit mob:ml-0 lg:ml-auto lg:mr-[20px] mob:max-w-[97%] lg:max-w-[600px] mb-5 tab:mr-5">
//               <div className="flex-1 bg-blue-700 text-white rounded-md p-4 max-w-fit mob:max-w-[97%] lg:max-w-[600px]">
//                 <p className="text-left max-w-c">{item}</p>
//               </div>

//               <button
//                 onClick={() => handleClick(index)}
//                 className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2"
//               >
//                 <PiDotsThreeOutlineVerticalFill />
//               </button>

//               {openStates[index] && (
//                 <div className="flex flex-col bottom-10 bg-slate-300 absolute right-0 z-20">
//                   <button
//                     className="font-bold py-2 px-4 rounded text-black"
//                     onClick={() => handleDelete(index)}
//                   >
//                     Remove
//                   </button>
//                   <button
//                     className="font-bold py-2 px-4 rounded text-black"
//                     onClick={() => handleEdit(index)}
//                   >
//                     Edit
//                   </button>
//                 </div>
//               )} 
//             </div> 

//             <p className="mt-16 w-full text-right">
//               {new Date().toLocaleTimeString([], {
//                 hour: "2-digit",
//                 minute: "2-digit",
//                 hour12: true,
//               })},{" "}
//               {new Date().toLocaleDateString([], {
//                 month: "short",
//                 day: "2-digit",
//               }).toUpperCase()}
//             </p>
//           </li> 
//         ))} */}

//         <div id="scroll-bottom" className="mb-14"></div>
//       </ul>

//       <div className="flex mb-0 absolute bottom-0 w-[73%]">
//         <input
//           type="text"
//           value={inputValue}
//           onChange={handleInputChange}
//           className="p-2 w-full border-2 rounded-md"
//           placeholder="Type a message"
//         />
//         <button
//           className="p-3 bg-blue-500 text-white rounded-md"
//           onClick={addItems}
//         >
//           <IoMdSend />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Body;




import { IoMdSend } from "react-icons/io";
import { useState, useEffect } from "react";
import { IoCall, IoVideocam } from "react-icons/io5";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

function Body({ selectedPerson, people, personId }) {
  const [inputValue, setInputValue] = useState("");
  const [itemsArray, setItemsArray] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [openStates, setOpenStates] = useState([]);

  // Load chat data from localStorage when selectedPerson or personId changes
  useEffect(() => {
    if (selectedPerson) {
      const storedPerson = JSON.parse(localStorage.getItem(`person-${selectedPerson.id}`));
      if (storedPerson) {
        setItemsArray(storedPerson.chat || []);
      } else {
        setItemsArray([]);
      }
    }
  }, [selectedPerson, personId]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDelete = (index) => {
    const newArray = itemsArray.filter((_, i) => i !== index);
    setItemsArray(newArray);
    const newOpenStates = openStates.filter((_, i) => i !== index);
    setOpenStates(newOpenStates);
  };

  const handleEdit = (index) => {
    setInputValue(itemsArray[index]);
    setEditIndex(index);
  };

  const handleClick = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };

  const addItems = () => {
    if (inputValue.trim() !== "") {
      if (editIndex !== null) {
        const updatedArray = [...itemsArray];
        updatedArray[editIndex] = inputValue;
        setItemsArray(updatedArray);
        setEditIndex(null);
      } else {
        const newItem = {
          id: itemsArray.length + 1, // Generate a new ID
          text: inputValue,
          timestamp: new Date().toLocaleString(),
          src: selectedPerson.imgSrc,
        };
        setItemsArray([...itemsArray, newItem]);

        // Update chat data for the selected person in localStorage
        const updatedPerson = { ...selectedPerson, chat: [...itemsArray, newItem] };

        localStorage.setItem(`person-${selectedPerson.id}`, JSON.stringify(updatedPerson));
        console.log("Updated person data:", updatedPerson);
      }

      setInputValue("");

      setTimeout(() => {
        document.getElementById("scroll-bottom").scrollIntoView({
          behavior: "smooth",
        });
      }, 0);
    }
  };

  return (
    <div className="max-h-svh overflow-x-hidden overflow-y-auto">
      <div className="w-full bg-slate-700 h-16 flex items-center fixed z-30">
        {selectedPerson ? (
          <>
            <img
              src={selectedPerson.imgSrc}
              className="w-16 h-16 object-cover rounded-full p-2"
              alt="Profile"
            />
            <h1 className="text-white ml-4">{selectedPerson.name}</h1>
          </>
        ) : (
          <h1 className="text-white ml-4">Select a person to chat</h1>
        )}

        <div className="flex justify-end items-center w-[70%] fixed">
          <IoCall size={25} className="text-white" />
          <IoVideocam size={25} className="text-white ml-10" />
        </div>
      </div>

      {/* Display messages */}
      <ul className="flex-grow mt-20">
        <div className="mt-20">
          {itemsArray.map((message, index) => (
            <div
              key={index}
              className={`mb-2 p-3 ml-10 mr-10 mob:m-5 tab:m-5 bg-slate-200 rounded-md max-w-fit mob:max-w-[97%] lg:max-w-[600px] ${
                index % 2 === 0
                  ? "float-left clear-both"
                  : "float-right clear-both bg-red-400"
              }`}
            >
              <div className="flex items-center">
                <img
                  src={message?.src}
                  alt="Message visual"
                  className="w-10 h-10 object-cover rounded-full"
                />
                <div className="ml-2">
                  <p className="text-xs">
                    {new Date(message?.timestamp).toLocaleTimeString()}
                  </p>
                  <p className="p-2 rounded-md">{message?.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div id="scroll-bottom" className="mb-14"></div>
      </ul>

      <div className="flex mb-0 absolute bottom-0 w-[73%]">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="p-2 w-full border-2 rounded-md"
          placeholder="Type a message"
        />
        <button
          className="p-3 bg-blue-500 text-white rounded-md"
          onClick={addItems}
        >
          <IoMdSend />
        </button>
      </div>
    </div>
  );
}

export default Body;
