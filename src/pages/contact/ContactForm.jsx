import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { FORM_URL } from "../../constants/api";
import Heading from "../../components/common/Heading";
import { MdClose } from "react-icons/md";
import Feedback from "../../components/common/alerts/Feedback";

const schema = yup.object().shape({
  "your-name": yup
    .string()
    .required("* Vennligst oppgi navn")
    .min(3, "* Navnet må være minst 3 tegn")
    .max(20, "* Naven kan ikke være mer enn 20 tegn"),

  "your-email": yup
    .string()
    .required("* Vennligst oppgi en e-postadresse")
    .email("* Vennligst oppgi en gyldig e-postadresse"),

  "your-phone": yup.string().required("* Vennligst oppgi telefonnummer"),

  "your-message": yup
    .string()
    .required("* Vennligst skriv en melding")
    .min(10, "* Medlingen må være minst 10 tegn")
    .max(400, "* Meldingen kan ikke være mer enn 400 tegn"),
});

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(null);

  const url = FORM_URL;

  const {
    register,
    handleSubmit,
    reset,
    resetField,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      "your-name": "",
      "your-email": "",
      "your-phone": "",
      "your-message": "",
    },
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);
    // console.log(data);

    try {
      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("response", response.request);
      setSubmitting(true);
      setSubmitted(true);
    } catch (error) {
      console.log("error", error);
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formState, reset]);

  useEffect(() => {
    let timer;
    if (submitted) {
      // Hide success message after 4 seconds
      timer = setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    }
    return () => clearTimeout(timer);
  }, [submitted]);

  const handleClearName = () => resetField("your-name");
  const handleClearEmail = () => resetField("your-email");
  const handleClearPhone = () => resetField("your-phone");
  const handleClearMessage = () => resetField("your-message");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
      <div className="contact-form__wrapper">
        <Heading size="2" cssClass="contact-form__heading">
          Kontaktskjema.
        </Heading>
        <fieldset disabled={submitting} className="contact-form__fieldset">
          <div className="contact-form__container">
            <input
              className="contact-form__input"
              type="text"
              id="name"
              placeholder="Oppgi navn"
              autoComplete="off"
              {...register("your-name")}
            />
            <label
              htmlFor="name"
              className="contact-form__label"
              style={{ color: errors["your-name"] ? "#f47777" : null }}
            >
              Navn
            </label>
            <MdClose
              onClick={handleClearName}
              className="contact-form__clear"
            />
            {errors["your-name"] && (
              <span className="input-error">{errors["your-name"].message}</span>
            )}
          </div>
          <div className="contact-form__container">
            <input
              className="contact-form__input"
              type="text"
              id="email"
              placeholder="Oppgi E-post"
              autoComplete="off"
              {...register("your-email")}
            />
            <label
              htmlFor="email"
              className="contact-form__label"
              style={{ color: errors["your-email"] ? "#f47777" : null }}
            >
              E-post
            </label>
            <MdClose
              onClick={handleClearEmail}
              className="contact-form__clear"
            />
            {errors["your-email"] && (
              <span className="input-error">
                {errors["your-email"].message}
              </span>
            )}
          </div>
          <div className="contact-form__container">
            <input
              className="contact-form__input"
              type="tel"
              placeholder="Oppgi telefonnummer"
              autoComplete="off"
              {...register("your-phone")}
            />
            <label htmlFor="phone" className="contact-form__label">
              Telefon
            </label>
            <MdClose
              onClick={handleClearPhone}
              className="contact-form__clear"
            />
          </div>
          <div className="contact-form__container">
            <div className="hider"></div>
            <textarea
              className="contact-form__textarea"
              placeholder="Skriv meldingen din her..."
              id="message"
              autoComplete="off"
              {...register("your-message")}
            ></textarea>
            <label className="contact-form__label">Melding</label>
            <MdClose
              onClick={handleClearMessage}
              className="contact-form__clear"
              id="clear-msg"
            />
            {errors["your-message"] && (
              <span className="input-error" id="textarea-error">
                {errors["your-message"].message}
              </span>
            )}
          </div>
        </fieldset>
        {submitted && (
          <Feedback heading="Takk for meldingen din!" status="success">
            Jeg kommer tilbake til deg snarlig.
          </Feedback>
        )}
        {serverError && (
          <Feedback heading="Noe gikk galt!" status="error">
            {serverError}
          </Feedback>
        )}
        <button className="contact-form__button">
          {submitting ? <>Sender...</> : "Send"}
        </button>
      </div>
    </form>
  );
}
