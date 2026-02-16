import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="zv-footer">
      <div className="zv-container">
        <div className="zv-footer-inner">
          <div className="zv-footer-brand">ZERO-VECTOR DESIGN</div>
          <div className="zv-footer-links">
            <Link to="/open">Open Vector</Link>
            <Link to="/investiture">Investiture</Link>
            <Link to="/start">Get Started</Link>
            <Link to="/quiz">Quiz</Link>
            <a href="https://eflowers.substack.com" target="_blank" rel="noopener noreferrer">Substack</a>
            <a href="https://www.linkedin.com/in/helloeflowers/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://helloerikaflowers.com" target="_blank" rel="noopener noreferrer">helloerikaflowers.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
