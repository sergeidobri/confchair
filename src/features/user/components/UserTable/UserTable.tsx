import styles from './UserTable.module.css';

type User = {
  email: string;
  title?: 'Mr.' | 'Mrs.' | 'Ms.' | 'Dr.' | 'Prof.' | null;
  firstName: string;
  lastName: string;
  affiliation?: string | null;
  country?: string | null; // в будущем - что-то одно из выпадающего списка стран
  ORCID?: string | null;
  webPage?: string | null;
};

const UserTable = ({ user }: { user: User }) => {
  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <th>Email</th>
          <td>{user.email}</td>
        </tr>
        <tr>
          <th>Title</th>
          <td>{user.title || ' '}</td>
        </tr>
        <tr>
          <th>First Name</th>
          <td>{user.firstName}</td>
        </tr>
        <tr>
          <th>Last Name</th>
          <td>{user.lastName}</td>
        </tr>
        <tr>
          <th>Affiliation</th>
          <td>{user.affiliation || ' '}</td>
        </tr>
        <tr>
          <th>Country</th>
          <td>{user.country || ' '}</td>
        </tr>
        <tr>
          <th>ORCID</th>
          <td>{user.ORCID || ' '}</td>
        </tr>
        <tr>
          <th>Web Page</th>
          <td>
            {user.webPage ? (
              <a href={user.webPage} target="_blank" rel="noreferrer">
                {user.webPage}
              </a>
            ) : (
              ' '
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default UserTable;
