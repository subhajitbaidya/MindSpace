import "./ProductGrid.css";

function ProductGrid() {
  const products = [
    {
      id: 1,
      image: "../src/assets/images/atomic.png",
      alt: "Perfume bottle",
    },
    {
      id: 2,
      image: "../src/assets/images/dad.png",
      alt: "Cosmetic product",
    },
    {
      id: 3,
      image: "../src/assets/images/ikigai.png",
      alt: "Person with jewelry",
    },
    {
      id: 4,
      image: "../src/assets/images/notgiving.png",
      alt: "Interior design items",
    },
    {
      id: 5,
      image: "../src/assets/images/fault.png",
      alt: "Fashion accessories",
    },
  ];

  return (
    <section className="product-grid-section">
      <div className="product-grid-container">
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.alt}
                className="product-image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductGrid;
