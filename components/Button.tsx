type ButtonProps = {
  text: string;
};

export default function Button({ text }: ButtonProps) {
  return (
    <button className="mt-8 bg-white text-black px-6 py-3 rounded-xl hover:bg-gray-300 transition">
      {text}
    </button>
  );
}