export function Footer() {
  return (
    <footer className="py-8 px-4 bg-slate-950 text-white border-t border-purple-600/30">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-purple-300">
          © {new Date().getFullYear()} Kaviya. All rights reserved.
        </p>
      </div>
    </footer>
  );
}