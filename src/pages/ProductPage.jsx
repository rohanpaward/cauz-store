
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, MessageCircle, Minus, Plus } from "lucide-react";
import { getProductBySlug } from "../data/products";

const WHATSAPP_NUMBER = "91XXXXXXXXXX";

export default function ProductPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  const [variantIndex, setVariantIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <main className="not-found">
        <h1>Product not found</h1>
        <Link to="/">Back to collection</Link>
      </main>
    );
  }

  const variant = product.variants[variantIndex];
  const sizeDetails = variant.sizes.find(
    (size) => size.name === selectedSize
  );
  const availableStock = sizeDetails?.stock ?? 0;

  const changeVariant = (index) => {
    setVariantIndex(index);
    setSelectedSize("");
    setQuantity(1);
    setActiveImage(0);
  };

  const updateQuantity = (amount) => {
    setQuantity((current) => {
      const next = current + amount;
      return Math.max(1, Math.min(next, availableStock || 1));
    });
  };

  const orderOnWhatsApp = () => {
    if (!selectedSize) {
      alert("Please select a size first.");
      return;
    }

    if (availableStock < 1) {
      alert("This size is currently out of stock.");
      return;
    }

    const message = [
      "Hi CAUZ! I would like to place an order.",
      "",
      `Product: ${product.name}`,
      `SKU: ${sizeDetails.sku}`,
      `Colour: ${variant.name}`,
      `Size: ${selectedSize}`,
      `Quantity: ${quantity}`,
      `Price: ₹${product.price.toLocaleString("en-IN")}`,
      `Total: ₹${(product.price * quantity).toLocaleString("en-IN")}`,
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main className="product-detail-page">
      <Link to="/" className="back-link">
        <ArrowLeft size={18} />
        Back to Collection
      </Link>

      <div className="product-detail-layout">
        <section className="detail-gallery">
          <div className="detail-main-image">
            <img
              src={variant.images[activeImage]}
              alt={`${product.name} ${variant.name} view`}
            />
            <span className="detail-image-label">
              {activeImage === 0 ? "FRONT VIEW" : "BACK VIEW"}
            </span>
          </div>

          <div className="detail-thumbnails">
            {variant.images.map((image, index) => (
              <button
                key={image}
                className={`detail-thumbnail ${
                  activeImage === index ? "active" : ""
                }`}
                onClick={() => setActiveImage(index)}
              >
                <img src={image} alt={`${index === 0 ? "Front" : "Back"} view`} />
              </button>
            ))}
          </div>
        </section>

        <section className="product-detail-info">
          <p className="detail-eyebrow">
            DROP 001 / {product.category.toUpperCase()}
          </p>

          <h1>{product.name}</h1>

          <p className="detail-price">
            ₹{product.price.toLocaleString("en-IN")}
          </p>

          <p className="detail-description">{product.description}</p>

          <div className="detail-divider" />

          <div className="selection-section">
            <div className="selection-heading">
              <h3>Colour</h3>
              <span>{variant.name}</span>
            </div>

            <div className="detail-colours">
              {product.variants.map((item, index) => (
                <button
                  key={item.id}
                  className={`detail-colour ${
                    variantIndex === index ? "active" : ""
                  }`}
                  onClick={() => changeVariant(index)}
                  aria-label={`Select ${item.name}`}
                  title={item.name}
                >
                  <span style={{ backgroundColor: item.hex }} />
                </button>
              ))}
            </div>
          </div>

          <div className="detail-divider" />

          <div className="selection-section">
            <div className="selection-heading">
              <h3>Select Size</h3>
              <span>Oversized Fit</span>
            </div>

            <div className="size-options">
              {variant.sizes.map((size) => (
                <button
                  key={size.sku}
                  disabled={size.stock <= 0}
                  className={`size-option ${
                    selectedSize === size.name ? "active" : ""
                  }`}
                  onClick={() => setSelectedSize(size.name)}
                >
                  {size.name}
                </button>
              ))}
            </div>

            {selectedSize && (
              <p className="stock-message">
                {availableStock > 0
                  ? `${availableStock} available`
                  : "Out of stock"}
              </p>
            )}
          </div>

          <div className="detail-divider" />

          <div className="selection-section">
            <div className="selection-heading">
              <h3>Quantity</h3>
              <span>{selectedSize ? `SKU: ${sizeDetails?.sku}` : "Select a size first"}</span>
            </div>

            <div className="quantity-selector">
              <button
                onClick={() => updateQuantity(-1)}
                disabled={quantity <= 1}
                aria-label="Decrease quantity"
              >
                <Minus size={17} />
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => updateQuantity(1)}
                disabled={!selectedSize || quantity >= availableStock}
                aria-label="Increase quantity"
              >
                <Plus size={17} />
              </button>
            </div>
          </div>

          <div className="mt-90px text-white">sd</div>

          <button
            className="detail-order-button"
            onClick={orderOnWhatsApp}
            disabled={!selectedSize || availableStock <= 0}
          >
            <MessageCircle size={22} />
            Order on WhatsApp
          </button>

          <p className="detail-order-note">
            Your order details will be sent directly to CAUZ on WhatsApp.
          </p>

          <div className="detail-divider" />

          <div className="product-specs">
            <div>
              <span>Fabric</span>
              <strong>{product.fabric}</strong>
            </div>
            <div>
              <span>Weight</span>
              <strong>{product.gsm}</strong>
            </div>
            <div>
              <span>Fit</span>
              <strong>{product.fit}</strong>
            </div>
            <div>
              <span>Print</span>
              <strong>Fade & Crack Resistant</strong>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
