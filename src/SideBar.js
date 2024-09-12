// import { IoIosSearch } from "react-icons/io";
// import { useState } from "react";

// function SideBar({ people, onSelectPerson }) {
//   const [activeId, setActiveId] = useState(null);
//   const [filteredUser , setFilteredUser] = useState(people)

//   const handleSelectPerson = (person) => {
//     setActiveId(person.id);
//     onSelectPerson(person);

//     // // Load chat data from localStorage for the selected person
//     // const storedPerson = localStorage.getItem(`person-${person.id}`);
//     // if (storedPerson) {
//     //   const parsedPerson = JSON.parse(storedPerson);
     
//     //   onSelectPerson(parsedPerson); 
//     //  console.log("Retrieved data:", parsedPerson);  // Update the selectedPerson state
//     // }

    
//   };
//   // const handleFilter = (e) => {  
//   //   const value = e.target.value;  
//   //   console.log("🚀 ~ handleFilter ~ value:", value)
//   //   console.log("🚀 ~ handleFilter ~ people:", people)
//   //   const data = people.filter(name => name?.toLowerCase().includes(value)); 
//   //   console.log("🚀 ~ handleFilter ~ data:", data) 
//   //   setFilteredUser(data);  
//   // };



// //   const handleFilter = (e) => {  
// //     const value = e.target.value.toLowerCase();  
// //     console.log("🚀 ~ handleFilter ~ value:", value);
// //     console.log("🚀 ~ handleFilter ~ people:", people);
// //     console.log("🚀 ~ filteredUser", filteredUser);
    

// //     const data = people.filter(person => {
// //         if (typeof person.name === 'string') {
// //             return person.name.toLowerCase().includes(value);
// //         } else if (person && typeof person.name === 'string') {
// //             // Assuming people is an array of objects with a name property
// //             return person.name.toLowerCase().includes(value);
// //         }
// //         return false; // Skip any invalid entries
// //     });

// //     console.log("🚀 ~ handleFilter ~ data:", data); 
// //     people=[...data];
// //     console.log("🚀  ~ people:", people)
// //     setFilteredUser(data);  
// // };




// // Store the original array
// const originalPeople = [...people];

// const handleFilter = (e) => {  
//     const value = e.target.value.toLowerCase();  
//     console.log("🚀 ~ handleFilter ~ value:", value);
//     console.log("🚀 ~ handleFilter ~ people:", people);
//     console.log("🚀 ~ filteredUser", filteredUser);
    
//     if (value === "") {
//         // If the input is empty, restore the original array
//         people = [...originalPeople];
//     } else {
//         // Filter the array based on the search query
//         people = people.filter(person => {
//             if (typeof person.name === 'string') {
//                 return person.name.toLowerCase().includes(value);
//             }
//             return false;
//         });
//     }

//     console.log("🚀  ~ people:", people);
//     setFilteredUser([...people]);  // Update the state to trigger re-rendering
// };












//   return (
//     <div className="h-screen p-3 overflow-hidden bg-gray-100">
//       {/* Active section */}
//       <div className="mb-4">
//         <h1 className="text-2xl font-bold m-5">Active Now</h1>
//         <div className="flex justify-evenly">
//           {people.map((items) => (
//             <div key={items.id}>
//               <img
//                 src={items.imgSrc}
//                 className="w-10 h-10 object-cover rounded-full"
//                 alt={items.name}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Search bar */}
//       <div className="relative">
//         <div className="absolute inset-y-0 start-0 flex items-center ps-6 pointer-events-none">
//           <IoIosSearch />
//         </div>
//         <input
//           type="search"
//           id="search"
//           name="search"
//           placeholder="Search"
//          onChange={handleFilter}
//           className="m-5 w-72 p-2 pl-10 border rounded-md"
//         />
//       </div>

//       {/* List section */}
//       <div className="h-96 overflow-y-auto">
//         {people.map((items) => (
//           <div
//             key={items.id}
//             className={`flex items-center p-2 mb-2 cursor-pointer rounded-md ${
//               activeId === items.id
//                 ? "bg-blue-100 border-l-4 border-blue-500"
//                 : "hover:bg-gray-200"
//             }`}
//             onClick={() => handleSelectPerson(items)}
//           >
//             <img
//               src={items.imgSrc}
//               className="w-14 h-14 object-cover rounded-full mr-4"
//               alt={items.name}
//             />
//             <div>
//               <p
//                 className={`font-bold ${
//                   activeId === items.id ? "text-blue-500" : "text-black"
//                 }`}
//               >
//                 {items.name}
//               </p>
//               <p
//                 className={` ${
//                   activeId === items.id ? "text-blue-400" : "text-gray-600"
//                 }`}
//               >
//                 {items.text}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SideBar;







































import { IoIosSearch } from "react-icons/io";
import { useState, useEffect } from "react";

function SideBar({ people, onSelectPerson, setPersonId }) {
  const [activeId, setActiveId] = useState(null);
  const [filteredUser, setFilteredUser] = useState(people);

  useEffect(() => {
    setFilteredUser(people);
  }, [people]);

  const handleSelectPerson = (person) => {
    setActiveId(person.id);
    onSelectPerson(person);
    setPersonId(person.id);
  };

  const handleFilter = (e) => {  
    const value = e.target.value.toLowerCase();

    if (value === "") {
        // If the input is empty, restore the original array
        setFilteredUser(people);
    } else {
        // Filter the array based on the search query
        const filtered = people.filter(person => 
            person.name && person.name.toLowerCase().includes(value)
        );
        setFilteredUser(filtered);
    }
  };

  return (
    <div className="h-screen p-3 overflow-hidden bg-gray-100">
      {/* Active section */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold m-5">Active Now</h1>
        <div className="flex justify-evenly">
          {filteredUser.map((items) => (
            <div key={items.id}>
              <img
                src={items.imgSrc}
                className="w-10 h-10 object-cover rounded-full"
                alt={items.name}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Search bar */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-2 flex items-center">
          <IoIosSearch size={20} />
        </div>
        <input
          type="text"
          placeholder="Search..."
          onChange={handleFilter}
          className="p-2 pl-10 border-2 rounded-md w-full"
        />
      </div>

      {/* People List */}
      <div className="mt-4 overflow-auto h-[70%]">
        {filteredUser.map((person) => (
          <div
            key={person.id}
            className={`flex items-center p-2 cursor-pointer ${activeId === person.id ? 'bg-gray-200  border-r-4 border-blue-600' : ''}`}
            onClick={() => handleSelectPerson(person)}
          >
            <img
              src={person.imgSrc}
              alt={person.name}
              className="w-12 h-12 object-cover rounded-full"
            />
            <div className="flex flex-col ml-3">
            <p className="ml-2 font-bold">{person.name}</p>
            <p>{person.text}</p> <p>{person.text}</p>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
