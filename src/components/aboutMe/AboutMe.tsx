import ModelRender from "../modelRender/ModelRender";
import style from "./AboutMe.module.scss";

export default function Aboutme() {
  return (
    <div className={style.aboutme}>
      <ModelRender />
      <div className={style.aboutme__container}>
        <h1>
          Hello. I&apos;m <span>Zakk.</span>
        </h1>
        <p>
          <span>I design and build full-stack web applications </span> with
          clean UI, scalable architecture, and thoughtful code. I specialize in
          turning rough ideas into polished digital products—bridging the gap
          between design and development. I work with startups and teams to
          build fast, accessible, and reliable web experiences. I care deeply
          about code quality, user experience, and the details that make good
          products great. Outside of work, I run D&D campaigns, tinker with
          pixel art, and explore how things work—always learning, always
          building.
        </p>
      </div>
    </div>
  );
}
