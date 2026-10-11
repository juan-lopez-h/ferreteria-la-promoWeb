import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import PaymentPage from "./pages/PaymentPage";

const pages = [
  { id: "inicio", label: "Inicio" },
  { id: "catalogo", label: "Catálogo" },
  { id: "pagos", label: "Métodos de pago" },
  { id: "terminos", label: "Términos y condiciones" },
  { id: "privacidad", label: "Política de privacidad" },
];

function App() {
  const [activePage, setActivePage] = useState("inicio");

  const renderPage = () => {
    switch (activePage) {
      case "catalogo":
        return <CatalogPage />;
      case "terminos":
        return <TermsPage />;
      case "privacidad":
        return <PrivacyPage />;
      case "pagos":
        return <PaymentPage />;
      case "inicio":
      default:
        return <HomePage />;
    }
  };

  return (
    <div className={`app-shell page-${activePage}`}>
      <Navbar />

      <div className="top-actions">
        {pages.map((page) => (
          <button
            key={page.id}
            type="button"
            className={`nav-link ${activePage === page.id ? "active" : ""}`}
            onClick={() => setActivePage(page.id)}
            aria-pressed={activePage === page.id}
          >
            {page.label}
          </button>
        ))}
      </div>

      <main>{renderPage()}</main>
    </div>
  );
}

export default App;