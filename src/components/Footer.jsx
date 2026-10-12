function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-badge">Ferretería La Promo</span>
          <h3>Todo para tu proyecto.</h3>
          <p>
            Herramientas, materiales de construcción, pinturas y soluciones para hogar
            y obra, con atención cercana y servicio confiable.
          </p>
        </div>

        <div className="footer-column">
          <h4>Contacto</h4>
          <ul>
            <li>
              <a href="tel:+573233934257">+57 323 393 42 57</a>
            </li>
            <li>
              <a href="https://wa.me/573233934257" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
            <li>Atención personalizada</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Horario</h4>
          <ul>
            <li>Lun - Vie: 7:30 AM - 6:00 PM</li>
            <li>Sábados: 8:00 AM - 4:00 PM</li>
            <li>Domingos: 9:00 AM - 12:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Ferretería La Promo H & C</p>
        <p>Soluciones para tu proyecto.</p>
      </div>
    </footer>
  );
}

export default Footer;
