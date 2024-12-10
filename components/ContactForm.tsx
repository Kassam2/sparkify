import React from "react";
import FormLink from "./FormLink";
import Button from "./Button";
import { useTranslations } from "next-intl";

function ContactForm() {
  const t = useTranslations("ContactForm");

  return (
    <div className="p-10 mt-40 text-center">
      {/* Label */}
      <label className="lg:text-xl relative border p-3 text-md bg-black text-white after:content-[''] after:absolute after:top-1 after:left-1 after:w-full after:h-full after:bg-white after:border after:border-black after:-z-10">
        {t("ContactUs")}
      </label>

      {/* Input Fields */}
      <form className="mt-10 border border-black p-4 shadow-box-black-sm">
        <ul className="text-xs lg:text-lg">
          <li>
            <FormLink type="text" placeholder={t("EnterName")} />
          </li>
          <li>
            <FormLink type="text" placeholder={t("EnterEmail")} />
          </li>
          <li>
            <FormLink
              type="text"
              placeholder={t("HowCanWeHelp")}
              height="h-32 lg:h-48"
            />
          </li>
        </ul>

        {/* Send Button */}
        <div className="flex flex-col items-center">
          <Button href="#" text={t("Send")} />
        </div>

        {/* Chat Section */}
        <div className="h-full mt-3 flex justify-center text-center">
          <label className="text-xs lg:text-lg">{t("OrChatWithUs")}</label>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-3">
          <Button href="#" text="Whatsapp" className ="mx-1" />
          <Button href="#" text="Linkedin" className ="mx-1" />
          <Button href="#" text="Instagram"className ="mx-1" />
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
