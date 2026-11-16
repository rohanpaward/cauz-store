
import { Search as SearchIcon, X } from "lucide-react";

function Search({ value, onChange }) {
  return (
    <div className="flex items-center gap-3 border-b border-[#E5E3DC] py-3">
      <SearchIcon size={17} className="text-[#77766F]" />

      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search products, collections..."
        className="w-full bg-transparent text-sm outline-none placeholder:text-[#99968D]"
      />

      {value && (
        <button
          onClick={() => onChange("")}
          aria-label="Clear search"
        >
          <X size={17} />
        </button>
      )}
    </div>
  );
}

export default Search;
