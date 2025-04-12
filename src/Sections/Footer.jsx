import "../Css/Footer.css"

function Footer(){

  return (<>
  
  <footer className="footer-section">
  <div className="footer-content">
    <h2 className="footer-names">Niharika and Kuldeep</h2>
    <p className="footer-message">Thank you for being a part of our celebration 💖</p>
    <div className="footer-socials">
      <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
      <a href="https://maps.google.com" target="_blank" rel="noreferrer">Location</a>
      <a href="mailto:email@example.com">Email</a>
    </div>
    <p className="footer-copy">© {new Date().getFullYear()} KnotWithNK. All rights reserved.</p>

  </div>
</footer>
</>)
}
export default Footer;