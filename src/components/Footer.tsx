import { FC } from "react";

const Footer: FC = () => (
  <footer className="text-center py-8 px-4">
    <p className="text-slate-900 font-light text-sm">
      Made with{" "}
      <span className="align-middle" title="keyboard">
        ⌨️
      </span>{" "}
      by{" "}
      <a
        href="https://github.com/MehdiKhoshnevisz/"
        className="no-underline font-bold text-dark"
      >
        Mehdi
      </a>
    </p>
  </footer>
);

export default Footer;
