import Socials from "../components/Socials"

const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 py-6 mt-24">
      <div className="">
        <Socials/>
      </div>
      <div className="text-center text-sm text-gray-500">
        <span className="dark:text-gray-100 text-gray-900 font-bold text-lg mr-2"> Tommaso Romano&apos;</span> &copy; {new Date().getFullYear()} - All Rights Reserved
        <br/>
        Made with <a className="inline-btn" href="https://nextjs.org">Next.js</a> and <a className="inline-btn" href="https://tailwindcss.com">tailwindcss</a>
      </div>
    </footer>
  );
};

export default Footer;
