import { dateFormatter } from '@/utils/conference';
import styles from './SubmissionDetailTable.module.css';
import type { SubmissionDetail } from '@/types/submissions';
import { SubmissionStatuses } from '@/lib/submissions';

interface Props {
  submission: SubmissionDetail;
}

const SubmissionDetailTable = ({ submission }: Props) => {
  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <th>Title</th>
          <td>{submission.title}</td>
        </tr>
        <tr>
          <th>Keywords</th>
          <td className={styles.keywordsCell}>
            {submission.keywords.map((keyword, i) => (
              <span key={`${keyword}-${i}`}>{keyword}</span>
            ))}
          </td>
        </tr>
        <tr>
          <th>Topic</th>
          <td>{submission.topic}</td>
        </tr>
        <tr>
          <th>Abstract</th>
          <td>{submission.abstract}</td>
        </tr>
        <tr>
          <th>Funding Information</th>
          <td>{submission.fundingInformation ? submission.fundingInformation : 'null'}</td>
        </tr>
        <tr>
          <th>Submitted at</th>
          <td>{dateFormatter.format(submission.submittedAt)}</td>
        </tr>
        <tr>
          <th>Updated at</th>
          <td>{dateFormatter.format(submission.updatedAt)}</td>
        </tr>
        <tr>
          <th>Important notice</th>
          <td>{submission.importantNotice}</td>
        </tr>
        <tr>
          <th>Presentation format</th>
          <td>{submission.presentationFormat}</td>
        </tr>
        <tr>
          {/* // TODO: сделать разделение на review status, presentation status */}
          <th>Review status</th>
          <td style={SubmissionStatuses[submission.status[1]].style}>
            {SubmissionStatuses[submission.status[1]].title}
          </td>
        </tr>
        <tr>
          {/* // TODO: сделать разделение на review status, presentation status */}
          <th>Presentation status</th>
          <td style={SubmissionStatuses[submission.status[0]].style}>
            {SubmissionStatuses[submission.status[0]].title}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SubmissionDetailTable;
