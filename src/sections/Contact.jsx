import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";
const contactText = {
  en: {
    title: "Get in Touch – Let’s Connect",
    subtitle: "💬 Have questions or ideas? Let’s talk! 🚀",
    nameLabel: "Name",
    namePlaceholder: "What’s your name?",
    emailLabel: "Email",
    emailPlaceholder: "What’s your email address?",
    messageLabel: "Message",
    messagePlaceholder: "How can I help you?",
    send: "Send Message",
    sending: "Sending...",
  },
  es: {
    title: "Hablemos – Conectá conmigo",
    subtitle: "💬 ¿Tenés preguntas o ideas? ¡Hablemos! 🚀",
    nameLabel: "Nombre",
    namePlaceholder: "¿Cómo te llamás?",
    emailLabel: "Email",
    emailPlaceholder: "¿Cuál es tu correo electrónico?",
    messageLabel: "Mensaje",
    messagePlaceholder: "¿En qué puedo ayudarte?",
    send: "Enviar mensaje",
    sending: "Enviando...",
  },
};

const Contact = ({ language = "es" }) => {
  const [sent, setSent] = useState(false);
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSent(false); // reinicia por las dudas

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setForm({ name: "", email: "", message: "" });
      setSent(true); // lo marcamos como enviado
      setTimeout(() => {
        setSent(false);
      }, 3000);
      alert(
        `✅ Mensaje enviado con éxito:\n\n👤 Nombre: ${form.name}\n📧 Email: ${form.email}\n💬 Mensaje: ${form.message}`
      );
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("❌ Hubo un error al enviar el mensaje. Intentá más tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center scroll-mt-32">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          sub={contactText[language].subtitle}
          title={contactText[language].title}
        />
        {/* <div className="grid-12-cols m-10">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-5">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-1"
              >
                <div>
                  <label htmlFor="name">
                    {contactText[language].nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={contactText[language].namePlaceholder}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">
                    {contactText[language].emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={contactText[language].emailPlaceholder}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">
                    {contactText[language].messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={contactText[language].messagePlaceholder}
                    rows="5"
                    required
                  />
                </div>

                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading
                        ? contactText[language].sending
                        : sent
                        ? "✅ Enviado"
                        : contactText[language].send}
                    </p>

                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-5 max-h-120">
            <div className="bg-[#D6F7F4] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div> */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-6 md:gap-10 mt-10 max-w-screen-md mx-auto">
          {/* Formulario */}
          <div className="w-full md:w-1/2">
            <div className="card-border rounded-xl p-5">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-4"
              >
                <div>
                  <label htmlFor="name">
                    {contactText[language].nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={contactText[language].namePlaceholder}
                    required
                    className="w-full px-3 py-2 rounded-md border"
                  />
                </div>

                <div>
                  <label htmlFor="email">
                    {contactText[language].emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={contactText[language].emailPlaceholder}
                    required
                    className="w-full px-3 py-2 rounded-md border"
                  />
                </div>

                <div>
                  <label htmlFor="message">
                    {contactText[language].messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={contactText[language].messagePlaceholder}
                    rows="5"
                    required
                    className="w-full px-3 py-2 rounded-md border resize-none"
                  />
                </div>

                <button type="submit" className="w-full">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading
                        ? contactText[language].sending
                        : sent
                        ? "✅ Enviado"
                        : contactText[language].send}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* Visual o modelo interactivo */}
          <div className="w-full md:w-1/2">
            <div className="bg-[#D6F7F4] w-full max-h-118 hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
