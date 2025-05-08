export function Label({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="block text-sm my-1 text-gray-900">
      {children}
    </label>
  );
}