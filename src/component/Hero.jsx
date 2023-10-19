function Hero() {
  return (
    <>
      <div className="introContainer">
        <div>
          <p id="name">Moises Fuentes</p>
          <p id="desc">
            Aspiring Software Engineer with a passion for full stack
            development. Seeking internships and new grad roles.
          </p>
        </div>
      </div>
      <div className="imagesContainer">
        <a
          className="socials"
          target="_blank"
          href="https://github.com/GHGFaber"
        >
          <img className="socials" id="github" src="git.svg" alt="" />
        </a>
        <a
          className="socials"
          target="_blank"
          href="https://www.linkedin.com/in/mfuentesfbr/"
        >
          <img className="socials" id="linkedin" src="linkedin.svg" alt="" />
        </a>
      </div>
    </>
  );
}

export default Hero;
