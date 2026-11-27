
import './Footer.css'

function Footer() {
  return (
    <footer className="footer" id="about">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>
            Smart<span>Campus.</span>
          </h2>
          <p>Making campus life more connected.</p>
        </div>

        <div className="footer-details">
          <p className="footer-label">
            DEVELOPED & MAINTAINED BY
          </p>
          <h3>Gauranshi Varshney</h3>
          <p>Full Stack Development Team</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 ABESEC Ghaziabad. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
