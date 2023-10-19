function Projects() {
  return (
    <>
      <div id="projectStart" className="projectsContainer">
        <div className="contentProject">
          <h1>NoCaps</h1>
          <img className="contentGIF" src="nocaps.gif" alt="" />
          <p>
            A web based typing sim that shows WPM (words per minute) and allows
            for users to sign in and create profile with the front end handled
            by
            <span style={{ color: "mediumspringgreen" }}> Vue</span>, the
            backend API held together by
            <span style={{ color: "mediumspringgreen" }}> Node</span> and
            <span style={{ color: "mediumspringgreen" }}> Express</span>, and
            <span style={{ color: "mediumspringgreen" }}> MySQL</span> as the
            database of choice.
          </p>
        </div>
      </div>
      <div className="projectsContainer">
        <div className="contentProject">
          <h1>
            <a href="https://jdm-genesis.onrender.com" target="_blank">
              Endless JDM
            </a>
          </h1>
          <img className="contentGIF" src="jdmgen.gif" alt="" />
          <p>
            Static page that shows some JDM cars and music that someone might
            listen to on a drive in the form of Spotify embeds. Created using
            <span style={{ color: "mediumspringgreen" }}> JavaScript</span>,
            <span style={{ color: "mediumspringgreen" }}> HTML</span>,
            <span style={{ color: "mediumspringgreen" }}> CSS</span>, and
            <span style={{ color: "mediumspringgreen" }}> BootStrap</span>.
          </p>
        </div>
      </div>
      <div className="projectsContainer">
        <div className="contentProject">
          <h1>
            <a href="" target="_blank">
              TokyoThrottle
            </a>
          </h1>
          <img className="contentGIF" src="tthrottle.gif" alt="" />
          <p>
            Car racing simulator that allows for choosing between colors and a
            time attack mode. Developed with
            <span style={{ color: "mediumspringgreen" }}> C++</span>,
            <span style={{ color: "mediumspringgreen" }}> OpenGL</span>, and
            <span style={{ color: "mediumspringgreen" }}> OpenAL</span>.
          </p>
        </div>
      </div>
      <div className="projectsContainer">
        <div className="contentProject">
          <h1>
            <a href="" target="_blank">
              Scribble (WIP)
            </a>
          </h1>
          <img className="contentGIF" src="scribble.png" alt="" />
          <p>
            A workspace/community web application for students catered to all
            aspects of student life. Features to include: in-app notetaking,
            messaging with classmates in a pub/sub format, and an ability to
            collaborate with filesharing. Under development with a
            <span style={{ color: "mediumspringgreen" }}> React</span> frontend,
            <span style={{ color: "mediumspringgreen" }}> Node</span> and
            <span style={{ color: "mediumspringgreen" }}> Express</span>{" "}
            backend, and
            <span style={{ color: "mediumspringgreen" }}> MySQL</span> as the
            database.
          </p>
        </div>
      </div>
    </>
  );
}

export default Projects;
