import ILocaleType from "@/types/locale-types";
import { getDictionary } from "@/utilities/get-dictionary";

export default async function About({ params: { lang } }: ILocaleType) {
  const dictionary = await getDictionary(lang);
  const { aboutPage } = dictionary;
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <section className="py-8 px-8">
        <h1 className="text-3xl text-blue-700 font-bold text-center mb-8">{aboutPage.title}</h1>
        <p className="mb-4">{aboutPage.welcome}</p>
        <p className="mb-4">{aboutPage.mission}</p>
        <p>{aboutPage.voteOfThanks}</p>
      </section>
    </div>
  );
}
