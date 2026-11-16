
function SizeSelector({ sizes, selectedSize, onSelect }) {
    return (
      <div>
        <div className="mb-4 flex justify-between">
          <p className="text-[10px] font-bold uppercase tracking-[1.5px]">
            Select Size
          </p>
  
          <span className="text-[10px] text-[#77766F]">
            Size guide
          </span>
        </div>
  
        <div className="grid grid-cols-5 gap-2">
          {sizes.map((item) => {
            const available = item.stock > 0;
  
            return (
              <button
                key={item.size}
                disabled={!available}
                onClick={() => onSelect(item)}
                aria-pressed={selectedSize?.size === item.size}
                className={`relative h-12 border text-xs font-semibold transition-colors ${
                  selectedSize?.size === item.size
                    ? "border-black bg-black text-white"
                    : available
                      ? "border-[#E5E3DC] hover:border-black"
                      : "cursor-not-allowed border-[#E5E3DC] text-[#C8C6BF]"
                }`}
              >
                {item.size}
  
                {!available && (
                  <span className="absolute left-1/2 top-1/2 h-px w-8 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#C8C6BF]" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
  
  export default SizeSelector;
  