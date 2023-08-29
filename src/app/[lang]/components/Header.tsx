import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";
import { Locale } from "@/utilities/i18n-config";
import { getDictionary } from "@/utilities/get-dictionary";

async function Header({ lang }: { lang: Locale }) {
  const dictionary = await getDictionary(lang);
  const { logo, navigations } = dictionary;
  return (
    <header className="bg-gray-800 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="Image" className="w-24 h-24 object-cover opacity-60" />
        <nav className="space-x-4">
          {navigations.map((link) => (
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
