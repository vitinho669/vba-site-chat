import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div style={{ background: "#0f172a", color: "white", minHeight: "100vh" }}>
      
      {/* HEADER */}
      <nav
        className="navbar navbar-expand-lg"
        style={{ background: "#020617", borderBottom: "1px solid #1e293b" }}
      >
        <div className="container">

          <img
            src="/logo/vba_logo_inline_com-icone_branco.png"
            alt="VBA Solutions"
            style={{
              height: "42px",
              objectFit: "contain",
            }}
          />

        </div>
      </nav>

      {/* HERO */}
      <section className="container text-center py-5">
        <h1 className="display-5 fw-bold mb-3">
          Atendimento profissional no WhatsApp
        </h1>

        <p className="lead text-secondary mb-4">
          Centralize conversas, organize atendimentos e tenha histórico completo
          de todos os clientes.
        </p>

        <a
          href="https://wa.me/5518996076660"
          className="btn btn-primary btn-lg"
        >
          Falar com especialista
        </a>
      </section>

      {/* PLANOS */}
      <section className="container pb-5">
        <div className="row g-4">

          {/* Plano 1 */}
          <div className="col-md-4">
            <div
              className="p-4 rounded-4 h-100"
              style={{ background: "#020617", border: "1px solid #1e293b" }}
            >
              <h3>Plano 1</h3>
              <p className="text-secondary">1 Canal WhatsApp</p>

              <h2 className="fw-bold">R$150</h2>

              <ul className="text-secondary">
                <li>5 usuários</li>
                <li>Atendimento em equipe</li>
                <li>Histórico de conversas</li>
              </ul>

              <button className="btn btn-outline-light w-100">
                Contratar
              </button>
            </div>
          </div>

          {/* Plano 2 */}
          <div className="col-md-4">
            <div
              className="p-4 rounded-4 h-100"
              style={{
                background: "#020617",
                border: "1px solid #3b82f6",
                boxShadow: "0 0 20px rgba(59,130,246,0.2)",
              }}
            >
              <h3>Plano 2</h3>
              <p className="text-secondary">2 Canais WhatsApp</p>

              <h2 className="fw-bold">R$250</h2>

              <ul className="text-secondary">
                <li>7 usuários</li>
                <li>Atendimento em equipe</li>
                <li>Histórico completo</li>
              </ul>

              <button className="btn btn-primary w-100">
                Contratar
              </button>
            </div>
          </div>

          {/* Plano 3 */}
          <div className="col-md-4">
            <div
              className="p-4 rounded-4 h-100"
              style={{ background: "#020617", border: "1px solid #1e293b" }}
            >
              <h3>Plano 3</h3>
              <p className="text-secondary">3 Canais WhatsApp</p>

              <h2 className="fw-bold">R$300</h2>

              <ul className="text-secondary">
                <li>9 usuários</li>
                <li>Atendimento em equipe</li>
                <li>Relatórios</li>
              </ul>

              <button className="btn btn-outline-light w-100">
                Contratar
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="text-center py-4"
        style={{ borderTop: "1px solid #1e293b" }}
      >

        <img
          src="/logo/vba_logo_inline_com-icone_branco.png"
          alt="VBA"
          style={{ height: "32px", marginBottom: "10px" }}
        />

        <p className="text-secondary small mb-0">
          © 2026 VBA Solutions
        </p>
      </footer>
    </div>
  );
}

export default App;
