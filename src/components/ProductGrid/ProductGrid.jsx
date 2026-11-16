
import ProductCard from "../ProductCard/ProductCard";

function ProductGrid({ products }) {
  if (!products.length) {
    return (
      <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
        <h3 className="font-sora text-xl font-semibold">
          Nothing found.
        </h3>
        <p className="mt-3 text-sm text-[#77766F]">
          Try changing your search or filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-10 md:gap-x-6 md:gap-y-14 lg:grid-cols-3">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          index={index}
        />
      ))}
    </div>
  );
}

export default ProductGrid;
