export function Button({ onClick, children }) {
  return (
    <button
      className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white bg-indigo-500 hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 disabled:bg-indigo-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
}