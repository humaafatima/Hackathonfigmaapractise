
export default function Button () {
    return (
<div className="flex py-15 mb-5 mt-20 w-[1170px] h-[200px] items-center justify-center">
<button
        onClick={() => alert("Button clicked!")}
        className="mr-10 px-5 w-[219px] h-[63px] font-poppins border-1px solid rounded-md text-white bg-[rgba(219,68,68,1)]">
     View All Products
      </button>
      </div>
    )
    }