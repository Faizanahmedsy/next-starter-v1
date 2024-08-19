import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="bg-[#1e1e1e] text-white py-10 md:py-16">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">About</h3>
          <p className="text-sm text-gray-300">
            We are a leading gaming tournament hosting platform, offering
            reliable and high-performance servers for all your multiplayer
            gaming needs.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-sm hover:text-gray-400"
              prefetch={false}
            >
              <TwitterIcon className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-sm hover:text-gray-400"
              prefetch={false}
            >
              <DiscIcon className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-sm hover:text-gray-400"
              prefetch={false}
            >
              <YoutubeIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">Tournaments</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="#"
                className="text-sm hover:text-gray-400"
                prefetch={false}
              >
                Minecraft Tournament
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-sm hover:text-gray-400"
                prefetch={false}
              >
                Rust Tournament
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-sm hover:text-gray-400"
                prefetch={false}
              >
                Ark Tournament
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-sm hover:text-gray-400"
                prefetch={false}
              >
                Valheim Tournament
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">Contact</h3>
          <p className="text-sm text-gray-300">
            Have a question or need help? Get in touch with our support team.
          </p>
          <div className="flex flex-col gap-2">
            <Link
              href="#"
              className="text-sm hover:text-gray-400"
              prefetch={false}
            >
              <MailIcon className="w-5 h-5 mr-2 inline-block" />
              support@gamingtournaments.com
            </Link>
            <Link
              href="#"
              className="text-sm hover:text-gray-400"
              prefetch={false}
            >
              <PhoneIcon className="w-5 h-5 mr-2 inline-block" />
              +1 (234) 567-890
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 mt-8 md:mt-12 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-gray-400">
          &copy; 2024 Gaming Tournaments. All rights reserved.
        </p>
        <nav className="flex gap-4 md:gap-6 text-sm text-gray-400">
          <Link href="#" className="hover:text-gray-300" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-gray-300" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="hover:text-gray-300" prefetch={false}>
            Cookie Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
}

function DiscIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function YoutubeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}
