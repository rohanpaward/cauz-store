
import {  MessageCircle, Mail } from "lucide-react";

const WHATSAPP_NUMBER = "91XXXXXXXXXX";
const INSTAGRAM_URL = "https://instagram.com/";
const CONTACT_EMAIL = "hello@cauz.com";

function ContactPage() {
  return (
    <div className="mx-auto max-w-[1000px] px-6 py-24 md:px-12 md:py-36">

      <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#99968D]">
        GET IN TOUCH
      </p>

      <h1 className="mt-7 font-sora text-5xl font-bold uppercase tracking-[-3px] md:text-7xl">
        LET'S TALK.
      </h1>

      <p className="mt-6 max-w-md text-sm leading-7 text-[#77766F]">
        Questions about an order, product or just want
        to say hello? We'd love to hear from you.
      </p>

      <div className="mt-16 space-y-8">

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between border-b border-[#E5E3DC] pb-7"
        >
          <div className="flex items-center gap-4">
            <MessageCircle />
            <span className="text-sm font-semibold">WhatsApp</span>
          </div>
          <span className="text-xs text-[#77766F]">Contact us →</span>
        </a>

        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="flex items-center justify-between border-b border-[#E5E3DC] pb-7"
        >
          <div className="flex items-center gap-4">
            <Mail />
            <span className="text-sm font-semibold">Email</span>
          </div>
          <span className="text-xs text-[#77766F]">Write to us →</span>
        </a>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between border-b border-[#E5E3DC] pb-7"
        >
          <div className="flex items-center gap-4">
            {/* <Instagram /> */}
            <span className="text-sm font-semibold">Instagram</span>
          </div>
          <span className="text-xs text-[#77766F]">Follow us →</span>
        </a>

      </div>
    </div>
  );
}

export default ContactPage;
