import LinkButton, { LinkTypes } from "@/components/LinkButton";
import ILocaleType from "@/types/locale-types";
import { getDictionary } from "@/utilities/get-dictionary";

export default async function Contact({ params: { lang } }: ILocaleType) {
  const dictionary = await getDictionary(lang);
  const { contactPage } = dictionary;

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <section className="py-8 px-8">
        <h1 className="text-3xl text-blue-700 font-bold text-center mb-8">{contactPage.title}</h1>
        <p className="mb-4">{contactPage.intro}</p>
        <ul className="list-disc pl-6">
          <li>
            {contactPage.emailLabel} <LinkButton label={contactPage.email} linkType={LinkTypes.EMAIL} link={contactPage.email} />
          </li>
          <li>
            {contactPage.phoneLabel} {contactPage.phone}
          </li>
          <li>
            {contactPage.socialMediaLabel} <LinkButton label={contactPage.socialMedia} linkType={LinkTypes.EXTERNAL} link={contactPage.twitterLink} />
          </li>
        </ul>
        <p className="mt-4">{contactPage.teamAssistance}</p>
      </section>
    </div>
  );
}
