import Educat from "./Education.module.css";

const Education = () => {
  return (
    <section className={Educat.educationSection} id="Education">
      <h1 className={Educat.educatTitle}>Education</h1>

      <div className={Educat.eduCard}>
        <h3>B.E – Computer Science and Engineering</h3>
        <p>Arunachala College of Engineering</p>
        <span>2022 – 2026</span>
        <h4>CGPA: 8.24</h4>
      </div>

      <div className={Educat.eduCard}>
        <h3>Higher Secondary (12th)</h3>
        <p>LMS Higher Secondary School</p>
        <span>2021 – 2022</span>
        <h4>Percentage: 77%</h4>
      </div>

      <div className={Educat.eduCard}>
        <h3>SSLC (10th)</h3>
        <p>LMS Higher Secondary School</p>
        <span>2019 – 2020</span>
        <h4>Percentage: 67.6%</h4>
      </div>

    </section>
  );
};

export default Education;