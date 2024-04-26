import { Link } from "react-router-dom";
import { Button } from 'primereact/button';

<Button label="Submit" />

export const ButtonLink1 = ({ to, children }) => (
  <Link to={to} className="bg-indigo-500 px-4 py-1 rounded-md">
    {children}
  </Link>
);

