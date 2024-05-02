export function Label({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="block text-sm my-1 text-black-400">
      {children}
    </label>
  );
}