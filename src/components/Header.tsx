const Header = () => {
  return (
    <header>
      <h1
        style={{
          fontSize: "3.5rem",
          marginTop: 0,
          marginBottom: "1rem",
          lineHeight: 1,
          color: "#333",
        }}
      >
        Mehdi Khoshnevis
      </h1>
      <span
        style={{ display: "block", fontSize: "1.5rem", marginBottom: "2rem" }}
      >
        Senior Software Developer &nbsp;{" "}
        <span style={{ fontSize: "1.2rem" }}>|</span> &nbsp;{" "}
        <a
          href="https://imehdi.dev"
          style={{ color: "#333", textDecoration: "none" }}
        >
          imehdi.dev
        </a>
      </span>
      <p
        style={{
          fontSize: "1.2rem",
          lineHeight: 2,
          color: "#a1a1a1",
          margin: 0,
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptate
        repellat ipsam repudiandae explicabo ratione aliquid, quo maxime ab unde
        distinctio nihil quod iure at ad, tempora odit mollitia. Amet repellat
        ipsam repudiandae explicabo ratione aliquid, quo maxime ab unde
        distinctio nihil quod iure at ad, tempora odit mollitia. Amet.
      </p>
    </header>
  );
};

export default Header;
