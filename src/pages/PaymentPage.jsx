const methods = [
  "Efectivo",
  "Transferencia bancaria",
  "Pagos por Nequi o Daviplata",
  "Pago contra entrega en zonas autorizadas",
];

function PaymentPage() {
  return (
    <section className="page-section">
      <div className="page-header">
        <span className="eyebrow">Opciones de compra</span>
        <h2>Métodos de pago</h2>
      </div>

      <ul className="info-list">
        {methods.map((method) => (
          <li key={method}>{method}</li>
        ))}
      </ul>
    </section>
  );
}

export default PaymentPage;
