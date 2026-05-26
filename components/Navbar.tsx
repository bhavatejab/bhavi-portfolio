export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 bg-black text-white">
      <h1 className="text-2xl font-bold">MySite</h1>

      <ul className="flex gap-6">
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}