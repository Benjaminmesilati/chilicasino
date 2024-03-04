export default function Footer() {
  return (
    <footer className="bg-[#EC8760] shadow text-white text-center">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
            className="flex items-center justify-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src="/logo.png" className="h-10 rotate-45" alt="Gamba Logo" />
            <h1 className="bold text-xxl">Chili</h1>
          </a>
          <ul className="flex flex-wrap items-center justify-center mb-6 text-sm font-medium text-white sm:mb-0">
            
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="#"
                className="hover:underline text-white me-4 md:me-6"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="#"
                className="hover:underline me-4 md:me-6"
              >
                Discord
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="#"
                className="text-white hover:underline"
              >
                How to Play
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-white sm:text-center">
          © 2024 | All Rights Reserved
        </span>
      </div>
    </footer>
  );
}
