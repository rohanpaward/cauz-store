
import { useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, ChevronRight } from "lucide-react";

const WHATSAPP_NUMBER = "91XXXXXXXXXX";

export default function ProductCard({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants[0]
  );

  const orderMessage = `Hi CAUZ! I'm interested in the ${product.name}. Please share the ordering details.`;

  return (
    <article className="product-card">
      <div className="product-card-top">
        <span className="product-card-category">
          {product.category}
        </span>
        <span className="product-badge">{product.badge}</span>
      </div>

      <Link
        to={`/products/${product.slug}`}
        className="product-image-pair"
      >
        {selectedVariant.images.map((image, index) => (
          <img
            key={`${selectedVariant.id}-${image}`}
            src={image}
            alt={`${product.name} ${index === 0 ? "front" : "back"} view in ${selectedVariant.name}`}
          />
        ))}
      </Link>

      <div className="product-card-bottom">
        <Link
          to={`/products/${product.slug}`}
          className="product-card-info"
        >
          <h3>{product.name}</h3>
          <p>₹{product.price.toLocaleString("en-IN")}</p>
        </Link>

        <div className="product-card-actions">
          <div className="colour-swatches">
            {product.variants.map((variant) => (
              <button
                key={variant.id}
                className={`colour-swatch ${
                  selectedVariant.id === variant.id ? "selected" : ""
                }`}
                style={{ backgroundColor: variant.hex }}
                aria-label={`Select ${variant.name}`}
                title={variant.name}
                onClick={() => setSelectedVariant(variant)}
              />
            ))}
          </div>

          <span className="action-divider" />

          <a
            className="product-whatsapp"
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              orderMessage
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={21} />
            <span>Order on WhatsApp</span>
            <ChevronRight size={20} />
          </a>
        </div>
      </div>
    </article>
  );
}
