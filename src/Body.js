

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

  // const handleDelete = (index) => {
  //   const newArray = itemsArray.filter((_, i) => i !== index);
  //   setItemsArray(newArray);
  //   const newOpenStates = openStates.filter((_, i) => i !== index);
  //   setOpenStates(newOpenStates);
  //   const daelete  = selectedPerson[personId]
  //   console.log("🚀 ~ handleDelete ~ daelete:", daelete)
    
  // };

  const handleDelete = (index) => {
   
    const newArray = itemsArray.filter((_, i) => i !== index);
    setItemsArray(newArray);
  
    
    const newOpenStates = openStates.filter((_, i) => i !== index);
    setOpenStates(newOpenStates);
  
    
    // const storedPerson = JSON.parse(localStorage.getItem(`person-${selectedPerson.id}`));
    // if (storedPerson) {
     
    //   const updatedChat = storedPerson.chat.filter((_, i) => i !== index);
  
     
    //   const updatedPerson = { ...storedPerson, chat: updatedChat };
    //   localStorage.setItem(`person-${selectedPerson.id}`, JSON.stringify(updatedPerson));
  
    //   console.log("🚀 ~ handleDelete ~ updatedPerson:", updatedPerson);
    // }

      const storedData = localStorage.getItem(`person-${selectedPerson.id}`)
      const getData = JSON.parse(storedData)
      console.log("🚀 ~ handleDelete ~ getData :", getData )
      if(getData){
        const updatedData = getData.chat.filter((item , i ) =>i!==index)
        const deletedMsg = {...getData , chat: updatedData}
     
        localStorage.setItem(`person-${selectedPerson.id}` , deletedMsg)
       
        console.log("🚀 ~ handleDelete ~ daeletedMsg:", deletedMsg)

      }

      

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
              <button onClick={()=>{handleDelete(index)}}>Delete</button>
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
