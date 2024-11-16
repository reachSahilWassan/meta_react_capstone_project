const TestimonialCard = (props)=>{
    return (
        <div className="flex h-auto shadow-sm border rounded-lg">
        <div className="flex flex-col bg-white rounded-xl">
          <div className="flex-auto p-4 md:p-6">
            <p className="text-base italic md:text-lg text-gray-800">
              {props.testimonial}
            </p>
          </div>

          <div className="p-4 bg-gray-100 rounded-b-xl md:px-7">
            <div className="flex items-center gap-x-3">
              <div className="shrink-0">
                <img className="size-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
              </div>

              <div className="grow">
                <p className="text-sm sm:text-base font-semibold text-gray-800">
                  Josh Tyson
                </p>
                <p className="text-xs text-gray-500">
                  Customer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default TestimonialCard;