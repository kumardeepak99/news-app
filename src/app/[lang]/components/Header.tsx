import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";
import { Locale } from "@/utilities/i18n-config";
import { getDictionary } from "@/utilities/dictionary";

async function Header({ lang }: { lang: Locale }) {
  const dictionary = await getDictionary(lang);
  return (
    <header className="bg-gray-800 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <img src={dictionary.logo} alt="Image" className="w-24 h-24 object-cover opacity-60" />
        <nav className="space-x-4">
          {dictionary.navigations.map((link) => (
            <Link key={link.href} href={`/${lang}${link.href}`} className="hover:text-blue-800">
              {link.name}
            </Link>
          ))}
        </nav>
        <LocaleSwitcher />
      </div>
    </header>
  );
}

export default Header;
