export default function Footer() {
  return (
    <footer className="bg-[#171714] text-[#F8F7F3]">
      <div className="container mx-auto px-6 py-10">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Cauz Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
}