import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <h1>About</h1>
      <p>
        I find memmory game on
        <Link to="https://youtu.be/ZCKohZwGZMw?si=j6dxH10UlctedlVX">
          YouTube
        </Link>
        .
      </p>
      <p>I decided change it and add some things I been learning.</p>
      <p>
        Like React-Icons, hooks, react-router-dom, use module for css,
        prop-types, context api, and create app with vite.
      </p>
    </section>
  );
};

export default About;
