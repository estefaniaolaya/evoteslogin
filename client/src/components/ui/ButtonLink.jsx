import { Link } from "react-router-dom";

export const ButtonLink = ({ to, children }) => (
  <Link to={to} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">

  
    {children}
  </Link>
);
