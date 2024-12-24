import aboutSvg from "../assets/about3.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section class="bg-violet-200 py-20" id="about">
      <div class="align-element grid  md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Hi, I'm Mradul, a passionate Web Developer specializing in creating
            modern, responsive, and user-friendly web applications. With
            expertise in React.js and currently working with Next.js, I craft seamless digital
            experiences that combine functionality with clean design. I thrive
            on problem-solving and continuously enhancing my skills to deliver
            impactful and innovative solutions.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
