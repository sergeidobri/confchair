import styles from './Heading.module.css';

interface Props {
  text: string;
  headingClass?: string;
}

const Heading = ({ text, headingClass }: Props) => {
  return <h1 className={`${styles.heading} ${headingClass ? headingClass : ''}`}>{text}</h1>;
};

export default Heading;
