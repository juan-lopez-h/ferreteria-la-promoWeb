import { useState, useRef, useEffect } from "react";
import hidrolava from "../assets/hidrolava.png";
import llana from "../assets/llana.png";
import tornilleria from "../assets/tornilleria.png";
import pinturas from "../assets/pinturas.png";

const categories = [
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

const allProducts = [
  {"id": 1, "producto": "Aerosol negro mate"},
  {"id": 2, "producto": "Aerosol blanco"},
  {"id": 3, "producto": "Aerosol negro brillante"},
  {"id": 4, "producto": "Aerosol azul"},
  {"id": 5, "producto": "Aerosol café"},
  {"id": 6, "producto": "Aerosol rojo"},
  {"id": 7, "producto": "Aerosol oro (35)"},
  {"id": 8, "producto": "Aerosol aluminio plata"},
  {"id": 9, "producto": "Aerosol Cars"},
  {"id": 10, "producto": "Aerosol crema"},
  {"id": 11, "producto": "Aerosol blanco mate"},
  {"id": 12, "producto": "Aerosol cromo brillante"},
  {"id": 13, "producto": "Aerosol amarillo/negro (por verificar)"},
  {"id": 14, "producto": "Aerosol plata alta temperatura"},
  {"id": 15, "producto": "Aerosol naranja"},
  {"id": 16, "producto": "Aerosol negro alta temperatura"},
  {"id": 17, "producto": "Aerosol anticorrosivo gris"},
  {"id": 18, "producto": "Aerosol anticorrosivo blanco"},
  {"id": 19, "producto": "Aerosol anticorrosivo negro"},
  {"id": 20, "producto": "Aerosol aluminio"},
  {"id": 21, "producto": "Aerosol mate transparente"},
  {"id": 22, "producto": "Aerosol transparente"},
  {"id": 23, "producto": "Mineral Bayron verde"},
  {"id": 24, "producto": "Mineral Bayron negro"},
  {"id": 25, "producto": "Mineral Bayron amarillo"},
  {"id": 26, "producto": "Mineral Bayron rojo"},
  {"id": 27, "producto": "Cerradura de manija"},
  {"id": 28, "producto": "Bombillo LED 12W"},
  {"id": 29, "producto": "Bombillo LED 20W"},
  {"id": 30, "producto": "Bombillo LED 50W"},
  {"id": 31, "producto": "Panel LED sobreponer B1 24W"},
  {"id": 32, "producto": "Panel LED sobreponer B1 24W"},
  {"id": 33, "producto": "Panel LED sobreponer B1 36W"},
  {"id": 34, "producto": "Panel LED Luxstar redondo 12W"},
  {"id": 35, "producto": "Panel LED sobreponer redondo 24W"},
  {"id": 36, "producto": "Panel LED incrustar redondo 12W"},
  {"id": 37, "producto": "Panel LED incrustar redondo pequeño 12W"},
  {"id": 38, "producto": "Panel LED incrustar B1 24W"},
  {"id": 39, "producto": "Lubricante Lubrimax"},
  {"id": 40, "producto": "Silicona en spray"},
  {"id": 41, "producto": "Pegante Boxer grande"},
  {"id": 42, "producto": "Vinipel pequeño"},
  {"id": 43, "producto": "Vinipel mediano"},
  {"id": 44, "producto": "Vinipel grande"},
  {"id": 45, "producto": "Llana dentada"},
  {"id": 46, "producto": "Llana mango plástico"},
  {"id": 47, "producto": "Llana mango madera"},
  {"id": 48, "producto": "Palustre 10 pulgadas"},
  {"id": 49, "producto": "Palustre 9 pulgadas"},
  {"id": 50, "producto": "Palustre 8 pulgadas"},
  {"id": 51, "producto": "Palustre 7 pulgadas"},
  {"id": 52, "producto": "Palustre 6 pulgadas"},
  {"id": 53, "producto": "Llana antioxidante"},
  {"id": 54, "producto": "Pistola de calafateo semiprofesional"},
  {"id": 55, "producto": "Tapa bocas construcción"},
  {"id": 56, "producto": "Cinta peligro"},
  {"id": 57, "producto": "Stick plus mediano"},
  {"id": 58, "producto": "Stick plus grande"},
  {"id": 59, "producto": "Pintón cera plástica terracota"},
  {"id": 60, "producto": "Pintón cera plástica vino tinto"},
  {"id": 61, "producto": "Pintón cera plástica caris"},
  {"id": 62, "producto": "Pintón cera plástica rojo chino"},
  {"id": 63, "producto": "Pintón pintura plástica rojo"},
  {"id": 64, "producto": "Pintón pintura plástica amarillo"},
  {"id": 65, "producto": "Cabuya de fique"},
  {"id": 66, "producto": "Pie de amigos pequeños"},
  {"id": 67, "producto": "Pie de amigos medianos"},
  {"id": 68, "producto": "Pie de amigos grandes"},
  {"id": 69, "producto": "Pie de amigos con soporte pequeño"},
  {"id": 70, "producto": "Pie de amigo con soporte mediano"},
  {"id": 71, "producto": "Pie de amigo con soporte grande"},
  {"id": 72, "producto": "Cinta flashe pequeña"},
  {"id": 73, "producto": "Cinta flashe mediana"},
  {"id": 74, "producto": "Cinta flashe grande"},
  {"id": 75, "producto": "Cinta transparente"},
  {"id": 76, "producto": "Cinta enmascarar 1.2 cm"},
  {"id": 77, "producto": "Cinta enmascarar 2.4 cm"},
  {"id": 78, "producto": "Cinta enmascarar 3.6 cm"},
  {"id": 79, "producto": "Cinta enmascarar 4.8 cm"},
  {"id": 80, "producto": "Cinta enmascarar 1 cm"},
  {"id": 81, "producto": "Caja eléctrica 2x4"},
  {"id": 82, "producto": "Caja eléctrica 4x4"},
  {"id": 83, "producto": "Caja uania hexagonal"},
  {"id": 84, "producto": "Tapa eléctrica 2x4"},
  {"id": 85, "producto": "Tapa circular"},
  {"id": 86, "producto": "Tapa plástica suplemento"},
  {"id": 87, "producto": "Semicodos PVC 3 pulgadas"},
  {"id": 88, "producto": "Uniones PVC 3 pulgadas"},
  {"id": 89, "producto": "Tapas PVC 3 pulgadas"},
  {"id": 90, "producto": "Tapas PVC 4 pulgadas"},
  {"id": 91, "producto": "Tapas PVC 2 pulgadas"},
  {"id": 92, "producto": "Tapas PVC 1 1/2 pulgadas"},
  {"id": 93, "producto": "Reducción PVC 4x2 pulgadas"},
  {"id": 94, "producto": "Uniones PVC 4 pulgadas"},
  {"id": 95, "producto": "Reducción PVC 3x1 1/2 pulgadas"},
  {"id": 96, "producto": "Reducción PVC 3x2 pulgadas"},
  {"id": 97, "producto": "Reducción PVC 2x1 1/2 pulgadas"},
  {"id": 98, "producto": "Sifón PVC 2 pulgadas"},
  {"id": 99, "producto": "Codos 2 pulgadas"},
  {"id": 100, "producto": "Semicodos 2 pulgadas"},
  {"id": 101, "producto": "Codos 1 campana 2 pulgadas"},
  {"id": 102, "producto": "Tee sanitaria PVC 2 pulgadas"},
  {"id": 103, "producto": "Yee PVC 2 pulgadas"},
  {"id": 104, "producto": "Codos PVC 1 1/2 pulgadas"},
  {"id": 105, "producto": "Uniones PVC 1 1/2 pulgadas"},
  {"id": 106, "producto": "Codo 1 campana 1 1/2 pulgadas"},
  {"id": 107, "producto": "Semicodos PVC 1 1/2 pulgadas"},
  {"id": 108, "producto": "Tee sanitaria 1 1/2 pulgadas"},
  {"id": 109, "producto": "Uniones 2 pulgadas PVC"},
  {"id": 110, "producto": "Codos 3 pulgadas PVC"},
  {"id": 111, "producto": "Sifón 3 pulgadas PVC"},
  {"id": 112, "producto": "Yee 3 pulgadas PVC"},
  {"id": 113, "producto": "Tee 3 pulgadas PVC"},
  {"id": 114, "producto": "Codos 4 pulgadas PVC"},
  {"id": 115, "producto": "Uniones 4 pulgadas"},
  {"id": 116, "producto": "Semicodos 4 pulgadas"},
  {"id": 117, "producto": "Tee 4 pulgadas PVC"},
  {"id": 118, "producto": "Gafas construcción blancas transparentes"},
  {"id": 119, "producto": "Gafas construcción negras"},
  {"id": 120, "producto": "Bandeja para pintura"},
  {"id": 121, "producto": "Balde de colores"},
];

/* ── helpers ── */
function getCategoryIcon(name) {
  const lower = name.toLowerCase();
  if (lower.includes("aerosol") || lower.includes("pintón") || lower.includes("pintura") || lower.includes("bandeja"))
    return "🎨";
  if (lower.includes("led") || lower.includes("bombillo") || lower.includes("panel"))
    return "💡";
  if (lower.includes("pvc") || lower.includes("codo") || lower.includes("semicodo") || lower.includes("unión") || lower.includes("uniones") || lower.includes("tee") || lower.includes("yee") || lower.includes("sifón") || lower.includes("reducción"))
    return "🔧";
  if (lower.includes("cinta"))
    return "📦";
  if (lower.includes("llana") || lower.includes("palustre") || lower.includes("pistola"))
    return "🛠️";
  if (lower.includes("caja") || lower.includes("tapa"))
    return "⚡";
  if (lower.includes("mineral"))
    return "🪨";
  if (lower.includes("vinipel") || lower.includes("pegante") || lower.includes("stick") || lower.includes("lubricante") || lower.includes("silicona"))
    return "🧴";
  if (lower.includes("pie de amigo"))
    return "📐";
  if (lower.includes("gafas") || lower.includes("tapa bocas"))
    return "🦺";
  if (lower.includes("cerradura"))
    return "🔒";
  if (lower.includes("cabuya"))
    return "🧵";
  if (lower.includes("balde"))
    return "🪣";
  return "📦";
}

function highlightMatch(text, query) {
  if (!query) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="search-highlight">{text.slice(idx, idx + query.length)}</mark>
      {text.slice(idx + query.length)}
    </>
  );
}

function CatalogPage() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const searchRef = useRef(null);
  const listboxRef = useRef(null);

  const filtered = query.trim().length > 0
    ? allProducts.filter((p) =>
        p.producto.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const showDropdown = isFocused && query.trim().length > 0;

  /* close on outside click */
  useEffect(() => {
    function handleClick(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  /* reset active index when results change */
  useEffect(() => {
    setActiveIndex(-1);
  }, [query]);

  /* scroll active item into view */
  useEffect(() => {
    if (activeIndex >= 0 && listboxRef.current) {
      const item = listboxRef.current.children[activeIndex];
      if (item) item.scrollIntoView({ block: "nearest" });
    }
  }, [activeIndex]);

  function handleKeyDown(e) {
    if (!showDropdown) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev < filtered.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : filtered.length - 1));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      setQuery(filtered[activeIndex].producto);
      setIsFocused(false);
    } else if (e.key === "Escape") {
      setIsFocused(false);
    }
  }

  return (
    <section className="page-section">
      <div className="page-header">
        <span className="eyebrow">Productos destacados</span>
        <h2>Catálogo</h2>
      </div>

      {/* ── Search Bar ── */}
      <div className="search-container" ref={searchRef}>
        <div className={`search-input-wrapper ${isFocused ? "focused" : ""}`}>
          <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            id="product-search"
            type="search"
            className="search-input"
            placeholder="Buscar producto... ej: aerosol, LED, PVC"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            role="combobox"
            aria-expanded={showDropdown}
            aria-controls="search-listbox"
            aria-activedescendant={activeIndex >= 0 ? `search-option-${activeIndex}` : undefined}
          />
          {query && (
            <button
              className="search-clear"
              onClick={() => { setQuery(""); setIsFocused(false); }}
              aria-label="Limpiar búsqueda"
              type="button"
            >
              ✕
            </button>
          )}
        </div>

        {showDropdown && (
          <ul
            id="search-listbox"
            className="search-dropdown"
            role="listbox"
            ref={listboxRef}
          >
            {filtered.length > 0 ? (
              filtered.map((product, index) => (
                <li
                  key={product.id}
                  id={`search-option-${index}`}
                  className={`search-result-item ${index === activeIndex ? "active" : ""}`}
                  role="option"
                  aria-selected={index === activeIndex}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    setQuery(product.producto);
                    setIsFocused(false);
                  }}
                >
                  <span className="result-icon">{getCategoryIcon(product.producto)}</span>
                  <span className="result-name">{highlightMatch(product.producto, query)}</span>
                </li>
              ))
            ) : (
              <li className="search-no-results">
                <span className="no-results-icon">🔍</span>
                <span>No se encontraron productos para "<strong>{query}</strong>"</span>
              </li>
            )}
            {filtered.length > 0 && (
              <li className="search-results-count">
                {filtered.length} {filtered.length === 1 ? "producto encontrado" : "productos encontrados"}
              </li>
            )}
          </ul>
        )}
      </div>

      {/* ── Category Cards ── */}
      <div className="product-grid">
        {categories.map((product) => (
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