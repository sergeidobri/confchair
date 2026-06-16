import cn from '@/utils/classname-func';
import styles from './Heading.module.css';

interface Props {
  text: string;
  headingClass?: string;
}

const Heading = ({ text, headingClass }: Props) => {
  return <h1 className={cn(headingClass, styles.heading)}>{text}</h1>;
};

export default Heading;
