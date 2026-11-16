
import { categories } from "../../data/categories";
import { SlidersHorizontal } from "lucide-react";

function Filters({
  category,
  setCategory,
  sort,
  setSort
}) {
  return (
    <div className="flex flex-col gap-5 border-b border-[#E5E3DC] py-5 md:flex-row md:items-center md:justify-between">

      <div className="flex gap-5 overflow-x-auto pb-2 md:pb-0">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`shrink-0 text-[10px] font-semibold uppercase tracking-[1.3px] transition-colors ${
              category === item
                ? "border-b border-black pb-2 text-black"
                : "text-[#99968D] hover:text-black"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <SlidersHorizontal size={15} />

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="bg-transparent text-[10px] font-semibold uppercase tracking-wider outline-none"
        >
          <option value="featured">Featured</option>
          <option value="newest">Newest</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;
