import { Link } from "react-router-dom";

const HeaderLink = (props)=>{
    return (
      <Link
        className="p-2 flex items-center text-sm text-gray-800 hover:bg-[#495E57] hover:text-white rounded-lg focus:outline-none focus:bg-gray-100"
        to={props.link}
        aria-current="page"
      >
        <svg
          className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
          <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        </svg>
        {props.children}
      </Link>
    );
}


export default HeaderLink