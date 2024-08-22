import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <hr></hr>
        <p align="center">
          <em>Hi, I'm a 3rd-year student at the University of the Assumption, studying BS in Information Technology.</em></p>
        <p>

      <hr></hr>

        <p>
          <strong>1. Introduce yourself. What are your hobbies, favourite music, favourite food, and other things you can tell me about yourself?</strong>
        <br></br>
        <br></br>
          Hi, I'm Joe Pete Briola, a 3rd-year student at the University of the Assumption, studying BS in Information Technology. I have a strong interest in web development, mobile development, and cybersecurity. When I'm not studying or working on tech projects, I love to play basketball and watch movies. One of my favorite songs is "Superman" by Five for Fighting, which always resonates with me. As for food, I'd imagine enjoying a variety of dishes, maybe something like sushi or pizza for a fun mix. I’m also fascinated by different cultures, languages, and creative ways to approach challenges.
        </p>

        <p>
          <strong>2. Why did you take up IT?</strong>
        <br></br>
        <br></br>
        I chose a BSIT course because it aligns with your interests and career goals, Pursuing a degree in IT can offer a wide range of opportunities in the tech industry. It allows you to gain a solid foundation in various IT concepts, programming languages, database management, and more. Additionally, the field of IT offers great job prospects and the chance to work on innovative projects. So, it's a fantastic choice that can lead to a fulfilling and successful career in the tech world.
        </p>

        <p>
          <strong>3. What career do you see yourself exploring after graduation?</strong>
        <br></br>
        <br></br>
        I see myself exploring a few different paths after graduation. Given my interests in web development, mobile development, and cybersecurity, I'm considering roles that could combine these areas. For example, I might look into a position as a cybersecurity analyst. Alternatively, working in a tech startup where I could have a broader range of responsibilities and potentially focus on innovative projects sounds appealing too.
        </p>

        <p>
          <strong>4. What do you expect to learn in this subject?</strong>
        <br></br>
        <br></br>
        In the Systems Integration subject, I expect to learn how to combine different software systems and technologies into a cohesive and functional whole. This involves understanding how various components interact, ensuring compatibility between systems, and managing data flow effectively. I'll also focus on solving integration challenges and optimizing system performance to create efficient and seamless solutions.
        </p>

        <p>
          <strong>5. What topics you want to be discussed in this subject?</strong>
        <br></br>
        <br></br>
        I’d like the subject to cover topics such as integration methodologies, including APIs and web services, data synchronization techniques, and middleware solutions. It would be helpful to discuss case studies of successful system integrations and common challenges, like handling data consistency and managing system dependencies. Understanding integration testing and troubleshooting would also be valuable for practical application.
        </p>



      <hr></hr>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}