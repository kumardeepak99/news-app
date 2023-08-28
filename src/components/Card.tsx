export const CardTypes = {
  REVIEW: "review",
  CATEGORY: "category",
} as const;

type CardProps = {
  title: string;
  description?: string;
  type?: (typeof CardTypes)[keyof typeof CardTypes]; // 'category' | 'review'
};

function Card({ title, description, type = CardTypes.REVIEW }: CardProps) {
  const baseStyles = "bg-white text-blue-600 p-8 rounded shadow-md hover:shadow-lg transition-shadow mb-6";
  const reviewStyles = type === CardTypes.REVIEW ? "text-xl font-semibold" : "";
  const categoryStyles = type === CardTypes.CATEGORY ? "text-2xl text-center font-bold text-blue-700" : "";

  return (
    <div className={baseStyles}>
      <h3 className={`${reviewStyles} ${categoryStyles}`}>{title}</h3>
      {description && <p>{description}</p>}
    </div>
  );
}

export default Card;
