import styles from './UserTable.module.css';

type User = {
  email: string;
  title?: 'Mr.' | 'Mrs.' | 'Ms.' | 'Dr.' | 'Prof.' | null;
  firstName: string;
  lastName: string;
  affiliation?: string | null;
  country?: string | null; // в будущем - что-то одно из выпадающего списка стран
};

const UserTable = ({ user }: { user: User }) => {
  const infoToDisplay = [
    { label: 'Email', value: user.email },
    { label: 'Title', value: user.title },
    { label: 'First Name', value: user.firstName },
    { label: 'Last Name', value: user.lastName },
    { label: 'Affiliation', value: user.affiliation },
    { label: 'Country', value: user.country },
  ];
  return (
    <table className={styles.table}>
      <tbody>
        {infoToDisplay.map((item, i) => (
          <tr key={i}>
            <th>{item.label}</th>
            <td>{item.value || ' '}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
