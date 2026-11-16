
import { useMemo, useState } from "react";
import { Cloud, Layers3, Shirt, ShieldCheck, Package, Truck, ArrowLeftRight } from "lucide-react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard/ProductCard";
// import ProductCard from "../components/ProductCard";

const categories = ["All", "Racing Club", "Basketball Club"];

export default function CollectionPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sort, setSort] = useState("newest");

  const visibleProducts = useMemo(() => {
    let result =
      activeCategory === "All"
        ? [...products]
        : products.filter((product) => product.category === activeCategory);

    if (sort === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [activeCategory, sort]);

  return (
    <main className="collection-page">
      <section className="collection-hero">
        <div className="hero-heading">
          <p className="drop-label">DROP 001</p>

          <h1>
            The <em>Club</em> Collection
          </h1>

          <p className="hero-subtitle">
            APPAREL FOR WHAT YOU LIVE, PLAY AND STAND FOR.
          </p>

          <span className="red-underline" />
        </div>

        <div className="hero-features">
          <div className="hero-feature">
            <Cloud size={39} strokeWidth={1.7} />
            <h3>Premium Cotton</h3>
            <p>240–250 GSM</p>
          </div>

          <div className="hero-feature">
            <Layers3 size={39} strokeWidth={1.7} />
            <h3>Long-Lasting Print</h3>
            <p>Fade & Crack Resistant</p>
          </div>

          <div className="hero-feature">
            <Shirt size={39} strokeWidth={1.7} />
            <h3>Oversized Fit</h3>
            <p>Relaxed & Comfortable</p>
          </div>
        </div>
      </section>

      <section className="collection-toolbar">
        <div className="category-pills">
          {categories.map((category) => {
            const count =
              category === "All"
                ? products.length
                : products.filter((p) => p.category === category).length;

            return (
              <button
                key={category}
                className={`category-pill ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category} ({count})
              </button>
            );
          })}
        </div>

        <label className="sort-control">
          <span>Sort by:</span>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </label>
      </section>

      <section className="products-grid">
        {visibleProducts.map((product) => (
        //   <ProductCard key={product.id} product={product} />
        <ProductCard key={product.id} product={product}/>
        ))}
      </section>

      <section className="service-strip">
        <div className="service-item">
          <ShieldCheck size={43} strokeWidth={1.7} />
          <div>
            <h3>Secure & Simple Ordering</h3>
            <p>Order directly on WhatsApp</p>
          </div>
        </div>

        <div className="service-item">
          <Package size={43} strokeWidth={1.7} />
          <div>
            <h3>Made to Order</h3>
            <p>Produced after you place an order</p>
          </div>
        </div>

        <div className="service-item">
          <Truck size={45} strokeWidth={1.7} />
          <div>
            <h3>Pan India Delivery</h3>
            <p>Reliable & Tracked</p>
          </div>
        </div>

        <div className="service-item">
          <ArrowLeftRight size={43} strokeWidth={1.7} />
          <div>
            <h3>Easy Exchanges</h3>
            <p>Size issues? We've got you.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
