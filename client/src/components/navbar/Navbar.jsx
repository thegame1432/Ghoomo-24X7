import { useContext } from "react";
import "./navbar.css"
import {Link} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";

import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/home" style={{color:"inherit",textDecoration:"none"}}>
        <span>
          <ModeOfTravelIcon className="logo"/>
        </span>
        <span className="logo ">  Ghoomo 24X7</span>
        </Link>
        
        {user ? user.username : (
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      )}
      </div>
    </div>
  )
}

export default Navbar


// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
// import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';

// const Navbar = () => {
//   const { user } = useContext(AuthContext);
//   return (
//     <div className="bg-gray-800 text-white flex items-center justify-center h-12">
//       <div className="container mx-auto flex items-center justify-between px-4">
//         <Link to="/home" className="flex items-center text-white no-underline">
//           <span className="flex items-center">
//             <ModeOfTravelIcon className="text-4xl" />  {/* Tailwind class for font size */}
//           </span>
//           <span className="ml-2 text-2xl">Ghoomo 24X7</span>  {/* Tailwind class for font size */}
//         </Link>
        
//         {user ? (
//           <span>{user.username}</span>
//         ) : (
//           <div className="flex gap-2">
//             <button className="bg-gray-200 text-gray-800 py-1 px-3 rounded">Register</button>
//             <button className="bg-gray-200 text-gray-800 py-1 px-3 rounded">Login</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
