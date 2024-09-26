import FooterLink from "../components/common/FooterLink";
import LinkButton from "../components/common/LinkButton";
import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__segment footer__segment-1">
          <div className="footer__contact">
            <p className="footer__heading">Kontakt</p>
            <div className="footer__line">
              <p>Telefon:</p>
              <FooterLink to="tel +4790659303">906 59 303</FooterLink>
            </div>
            <div className="footer__line">
              <p>E-post:</p>
              <FooterLink to="mailto: hugostoresund@gmail.com">
                hugo.storesund@gmail.com
              </FooterLink>
            </div>
            <LinkButton to="contact">Kontaktskjema</LinkButton>
          </div>
        </div>
        <div className="footer__segment footer__segment-2">
          <div>
            <p className="footer__heading">Org.nr.</p>
            <FooterLink to="https://data.brreg.no/enhetsregisteret/oppslag/enheter/977314194">
              977314194
            </FooterLink>
          </div>
          <div>
            <p className="footer__heading">Adresse</p>
            <div>
              <p>Lyngvegen 4</p>
              <p>5382 Skogsvåg</p>
            </div>
          </div>
        </div>
        <div className="footer__ver-divider footer__segment-3"></div>
        <div className="footer__segment footer__segment-4">
          <hr className="footer__hor-divider" />
          <div>
            <p className="footer__heading">OSS</p>
            <FooterLink to="contact">Ofte stilte spørsmål</FooterLink>
          </div>
          <div>
            <p className="footer__heading">Nøytral info om varmepumper</p>
            <FooterLink to="https://www.varmepumpeinfo.no">
              varmepumpeinfo.no
            </FooterLink>
          </div>
          <div>
            <p className="footer__heading">Minigraver-utleie</p>
            <FooterLink to="http://www.minigraveren.com">
              minigraveren.no
            </FooterLink>
          </div>
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
