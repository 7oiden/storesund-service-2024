import PageHeading from "../components/common/PageHeading";
import PageIntro from "../components/common/PageIntro";
import ContactBanner from "../components/common/ContactBanner";
import image from "../assets/images/pic-11.png";

export default function Installation() {
  return (
    <>
      <PageHeading>Montering.</PageHeading>
      <PageIntro
        image={image}
        heading="Jeg monterer og demonterer alle typer varmepumper, også de du har kjøpt selv."
      >
        <p>
          Fastpris på standard montasje gjelder luft-til-luft-varmepumpe uansett
          merke i en bolig med trevegg, der det forutsettes god atkomst. Kjøring
          samt nødvendig utstyr for en klar-til-bruk installasjon er inkludert i
          prisen, dette med forbehold om at elektrisk tilkobling for utedel er
          på plass. Se lenger ned på siden for komplett liste for hva som er
          inkludert.
        </p>
        <p>
          Ta kontakt i dag for å bestille time, eller dersom du ønsker
          pristilbud på montasje av andre typer varmepumper, eller anlegg som
          faller utenom det som er definert som standard.{" "}
        </p>
      </PageIntro>
      <ContactBanner />
    </>
  );
}
