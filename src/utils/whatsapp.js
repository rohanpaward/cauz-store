
const WHATSAPP_NUMBER = "918618269927";

export const orderOnWhatsApp = ({
  product,
  colour,
  size,
  quantity,
  sku
}) => {
  if (!product || !colour || !size || !quantity) {
    return;
  }

  const message = `
Hi CAUZ! I'd like to place an order.

Product: ${product.name}
Colour: ${colour.colourName}
Size: ${size.size}
SKU: ${sku}
Quantity: ${quantity}
Price: ₹${product.price}
Total: ₹${product.price * quantity}

Please share the ordering details.
`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  window.open(url, "_blank", "noopener,noreferrer");
};
