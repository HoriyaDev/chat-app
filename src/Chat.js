
// import { useState } from "react";
// import Header from "./Header";
// import Body from "./Body";
// import SideBar from "./SideBar";
// import { people } from "./Array";

// function Chat() {
//   const [selectedPerson, setSelectedPerson] = useState(people[0]);
//   const [personId, setPersonId] = useState(people[0].id);
//   return (
//     <div className="flex">
//       <div className="w-3/12 h-screen mob:hidden">
//         <SideBar people={people} onSelectPerson={setSelectedPerson} setPersonId={setPersonId} />
//         {/* Passes data and function to SideBar */}
//       </div>

//       <div className="w-9/12 ml-auto mob:w-full">
//         <Body selectedPerson={selectedPerson} personId={personId} />
//         {/* Passes selected person to Body */}
//       </div>
//     </div>
//   );
// }

// export default Chat;



import { useState, useEffect } from "react";

import Body from "./Body";
import SideBar from "./SideBar";
import { people as initialPeople } from "./Array";

function Chat() {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [personId, setPersonId] = useState(null);

  useEffect(() => {
    // Load people from localStorage or use initial data
    const storedPeople = JSON.parse(localStorage.getItem('people')) || initialPeople;
    localStorage.setItem('people', JSON.stringify(storedPeople));

    if (storedPeople.length > 0) {
      setSelectedPerson(storedPeople[0]);
      setPersonId(storedPeople[0].id);
    }
  }, []);

  return (
    <div className="flex">
      <div className="w-3/12 h-screen mob:hidden">
        <SideBar people={JSON.parse(localStorage.getItem('people')) || initialPeople} onSelectPerson={setSelectedPerson} setPersonId={setPersonId} />
        {/* Passes data and function to SideBar */}
      </div>

      <div className="w-9/12 ml-auto mob:w-full">
        {selectedPerson && (
          <Body selectedPerson={selectedPerson} personId={personId} />
        )}
        {/* Passes selected person to Body */}
      </div>
    </div>
  );
}

export default Chat;
