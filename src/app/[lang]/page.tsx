import Card, { CardTypes } from "@/components/Card";
import ILocaleType from "@/types/locale-types";
import { getDictionary } from "@/utilities/get-dictionary";
import Image from "next/image";

export default async function Home({ params: { lang } }: ILocaleType) {
  const dictionary = await getDictionary(lang);
  const { heroSection, categories, reviews, sections } = dictionary;
  return (
    <>
      <div className="bg-gray-100 min-h-screen ">
        {/* Hero Section */}
        <section className="bg-orange-900 text-white py-16 relative">
          <Image fill src={heroSection.image.src} alt={heroSection.image.alt} className="absolute top-0 left-0 w-full h-full object-cover opacity-40" />
          <div className="relative z-10 text-center">
            <h1 className="text-4xl font-bold mb-4">{heroSection.title}</h1>
            <p className="text-xl mb-8">{heroSection.description}</p>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-8 px-8">
          <h2 className="text-3xl text-blue-700 font-bold text-center mb-8">{sections.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <Card key={category} type={CardTypes.CATEGORY} title={category} />
            ))}
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-2 px-10">
          <h2 className="text-3xl text-blue-700 font-bold text-center mb-8">{sections.review}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviews.map((review) => (
              <Card key={review.title} type={CardTypes.REVIEW} title={review.title} description={review.description} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
