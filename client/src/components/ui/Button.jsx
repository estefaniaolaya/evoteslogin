export function Button({ onClick, children }) {
  return (
    <button
      className="inline-block text-sm px-4 py-2 leading-none border rounded-lg bg-indigo-600 text-white hover:text-indigo-600 hover:bg-white hover:border-indigo-600 mt-4 lg:mt-0 disabled:bg-indigo-300 disabled:text-gray-500 disabled:border-gray-500"
      onClick={onClick}
    >
      {children}
    </button>
  );
}