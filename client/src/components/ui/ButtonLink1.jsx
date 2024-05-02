import { Link } from "react-router-dom";

export const ButtonLink1 = ({ to, children }) => (
  <Link
    to={to}
    className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
  >
    {children}
  </Link>
);