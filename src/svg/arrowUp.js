function ArrowUp(props) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-10 h-10 p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-full hover:cursor-pointer"
        onClick={props.incr}
      >
        <path
          fillRule="evenodd"
          d="M11.47 4.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 6.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5zm.53 7.59l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 12.31z"
          clipRule="evenodd"
        />
      </svg>
    </>
  );
}

export default ArrowUp;
