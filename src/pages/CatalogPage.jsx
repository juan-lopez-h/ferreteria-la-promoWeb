import hidrolava from "../assets/hidrolava.png";
import llana from "../assets/llana.png";
import tornilleria from "../assets/tornilleria.png";
import pinturas from "../assets/pinturas.png";

const products = [
  {
    title: "Herramientas",
    description: "Potencia y precisión para cualquier proyecto.",
    image: hidrolava,
  },
  {
    title: "Material de Rio",
    description: "Materiales para proyectos de construcción y arreglos del hogar.",
    image: llana,
  },
  {
    title: "Tornillería",
    description: "Ideales para poder apoyar cualquier estructura.",
    image: tornilleria,
  },
  {
    title: "Pinturas",
    description: "Soluciones para acabados duraderos y de calidad.",
    image: pinturas,
  },
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
            {product.image && <img src={product.image} alt={product.title} className="product-image" />}
            <strong>{product.title}</strong>
            <p>{product.description}</p>
          </article>
        ))}
      </div>
      <div className="catalog-footer">
        <p>No encuentras algo que necesitas?, sientete libre de preguntarnos</p>
        <a href="/contacto" className="contact-link">Contáctanos</a>
      </div>  
    </section>
   
  );
}

export default CatalogPage;
