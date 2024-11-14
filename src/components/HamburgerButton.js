const HamburgerButton = () =>{
    return (
      <button
        type="button"
        className="hs-collapse-toggle md:hidden relative size-9 flex justify-center items-center font-medium text-[12px] rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
        id="hs-header-base-collapse"
        aria-expanded="false"
        aria-controls="hs-header-base"
        aria-label="Toggle navigation"
        data-hs-collapse="#hs-header-base"
      >
        
        
        <span className="sr-only">Toggle navigation</span>
      </button>
    );
}

export default HamburgerButton