import { Button } from '@components/ui/Button/Button';
import styles from './UserTable.module.css';
import type { User } from '@features/user/schemas/user';
import { useUserForm } from '@features/user/hooks/useUserForm';
import { Input } from '@components/ui/Input/Input';
import { Select } from '@components/ui/Select/Select';
import { countryOptions } from '@/lib/cities';
import React from 'react';

type Props = {
  user: User;
  isEditable: boolean;
  onCancel: () => void;
  onSave: () => void;
};

const UserTable = ({ user, onSave, onCancel, isEditable = false }: Props) => {
  const { form, handleSubmit, handleCancel } = useUserForm({
    user,
    onSubmit: onSave,
    onCancel: onCancel,
  });

  const {
    register,
    formState: { errors },
  } = form;

  const infoToDisplay = [
    {
      label: 'Email',
      editable: () => user.email,
      view: user.email,
    },
    {
      label: 'Title',
      editable: () => (
        <Select
          options={[
            { value: '', label: '-' },
            { value: 'Mr.', label: 'Mr.' },
            { value: 'Mrs.', label: 'Mrs.' },
            { value: 'Ms.', label: 'Ms.' },
            { value: 'Dr.', label: 'Dr.' },
            { value: 'Prof.', label: 'Prof.' },
          ]}
          {...register('title')}
        />
      ),
      view: user.title || '-',
    },
    {
      label: 'First Name',
      editable: () => <Input error={errors.firstName?.message} {...register('firstName')} />,
      view: user.firstName,
      isRequired: true,
    },
    {
      label: 'Last Name',
      editable: () => <Input error={errors.lastName?.message} {...register('lastName')} />,
      view: user.lastName,
      isRequired: true,
    },
    {
      label: 'Affiliation',
      editable: () => <Input error={errors.affiliation?.message} {...register('affiliation')} />,
      view: user.affiliation || '-',
      isRequired: true,
    },
    {
      label: 'Country',
      editable: () => (
        <Select
          options={countryOptions.map(country => ({ value: country, label: country }))}
          {...register('country')}
        />
      ),
      view: user.country || '-',
      isRequired: true,
    },
    {
      label: 'ORCID',
      editable: () => <Input error={errors.orcid?.message} {...register('orcid')} />,
      view: user.orcid ? user.orcid : null,
    },
    {
      label: 'Web Page',
      editable: () => <Input error={errors.webPage?.message} {...register('webPage')} />,
      view: user.webPage ? user.webPage : null,
    },
  ];

  return (
    <>
      <table className={styles.table}>
        <tbody>
          {infoToDisplay.map((item, i) => (
            <React.Fragment key={i}>
              {(isEditable || item.view) && (
                <tr>
                  <th>
                    {item.label}
                    {item.isRequired && isEditable && (
                      <span className={styles.requiredStar}>*</span>
                    )}
                  </th>
                  <td>{isEditable ? item.editable() : item.view}</td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>

      {errors.root && isEditable && <div className={styles.formError}>{errors.root.message}</div>}

      {isEditable && (
        <div className={styles.editButtons}>
          <Button type="button" onClick={handleCancel} btnClass={styles.btnCancel}>
            Cancel
          </Button>
          <Button type="button" onClick={handleSubmit}>
            Save
          </Button>
        </div>
      )}
    </>
  );
};

export default UserTable;
