type CardProps = {
  title: string;
  description: string;
};

export default function Card({
  title,
  description,
}: CardProps) {
  return (
    <div className="p-6 rounded-xl shadow-lg border">
      <h2 className="text-2xl font-bold mb-3">
        {title}
      </h2>

      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}