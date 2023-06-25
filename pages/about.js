import styles from '../styles/About.module.css';
//import styles2 from '../styles/About.module.scss';

function About () {
  return (
    <div>
      <h2>This is chnaged from global css</h2>
      <div className={styles.heading_h3}>This is changed from component style css</div>
      <div className={styles.highlight}>This is changed from sass</div>
    </div>
  );
}

export default About;
