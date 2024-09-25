import FooterLink from "../components/navigation/common/FooterLink";
import LinkButton from "../components/navigation/common/LinkButton";
import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__segment">
          <p className="footer__heading">Kontakt</p>
          <div>
            <div className="footer__item">
              <p>Telefon:</p>
              <FooterLink to="tel +4790659303">906 59 303</FooterLink>
            </div>
            <div className="footer__item">
              <p>E-post:</p>
              <FooterLink to="mailto: hugostoresund@gmail.com">
                hugostoresund@gmail.com
              </FooterLink>
            </div>
          </div>
          <LinkButton to="contact">Kontaktskjema</LinkButton>
        </div>
        <div className="footer__segment">
          <p className="footer__heading">Org.nr.</p>
          <FooterLink to="https://data.brreg.no/enhetsregisteret/oppslag/enheter/977314194">
            977314194
          </FooterLink>
        </div>
        <div className="footer__segment">
          <p className="footer__heading">Adresse</p>
          <div>
            <p>Lyngvegen 4</p>
            <p>5382 Skogsvåg</p>
          </div>
        </div>
        <hr className="footer__divider"/>
        <div className="footer__segment">
          <p className="footer__heading">OSS</p>
          <FooterLink to="contact">Ofte stilte spørsmål</FooterLink>
        </div>
        <div className="footer__segment">
          <p className="footer__heading">Nøytral info om varmepumper</p>
          <FooterLink to="https://www.varmepumpeinfo.no">
            varmepumpeinfo.no
          </FooterLink>
        </div>
        <div className="footer__segment">
          <p className="footer__heading">Minigraver-utleie</p>
          <FooterLink to="http://www.minigraveren.com">
            minigraveren.no
          </FooterLink>
        </div>
      </div>
      <div className="footer__copyright">
        <span>Copyright</span>
        <FaRegCopyright className="copyright-icon" />
        <span>2024 Hugo Storesund</span>
      </div>
    </footer>
  );
}
