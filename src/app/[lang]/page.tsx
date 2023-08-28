import { getDictionary } from "@/utilities/dictionary";
import { Locale } from "@/utilities/i18n-config";

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="text-blue-900 text-center font-bold">
      <p>Current language is : {lang}</p>
      {dictionary.hello}!!
    </div>
  );
}
