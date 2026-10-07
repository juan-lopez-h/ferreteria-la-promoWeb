const products = [
  { title: "Herramientas", description: "Potencia y precisión para cualquier proyecto." },
  { title: "Material de Rio", description: "Materiales para proyectos de construcción y arreglos del hogar." },
  { title: "Tornillería", description: "Ideales para poder apoyar cualquier estructura." },
  { title: "Pinturas", description: "Soluciones para acabados duraderos y de calidad." },
];

function CatalogPage() {
  return (
    <section className="page-section">
      <div className="page-header">
        <span className="eyebrow">Productos destacados</span>
        <h2>Catálogo</h2>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <article key={product.title} className="product-card">
            <strong>{product.title}</strong>
            <p>{product.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CatalogPage;
