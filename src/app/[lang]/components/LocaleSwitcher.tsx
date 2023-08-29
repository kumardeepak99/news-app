"use client";
import { i18n } from "@/utilities/i18n-config";
import { usePathname, useRouter } from "next/navigation";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const router = useRouter();
  const currentLocale = pathName.split("/")[1];

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="bg-orange-300 p-4 rounded-md">
      <label htmlFor="locale-switcher" className="block text-black font-bold mb-2">
        Locale
      </label>
      <select
        className="w-full p-2 bg-orange-400 text-white border border-blue-700 rounded focus:outline-none focus:border-blue-400 focus:ring focus:ring-blue-200"
        id="locale-switcher"
        onChange={(e) => {
          router.push(redirectedPathName(e.target.value));
        }}
        value={currentLocale}
      >
        {i18n.locales.map((locale) => (
          <option key={locale} value={locale} className="bg-white text-blue-500 py-2 px-4 hover:bg-orange-500 hover:text-white focus:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-200">
            {locale}
          </option>
        ))}
      </select>
    </div>
  );
}
