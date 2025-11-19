import { useLoaderData } from '@tanstack/react-router';

const CallForPapersPage = () => {
  const { conference } = useLoaderData({ from: '/call-for-papers/$acronym' });
  console.log(conference);

  if (!conference) {
    return <div>Конференция не найдена</div>;
  }

  return (
    <div>
      <h1>{conference.name}</h1>
    </div>
  );
};

export default CallForPapersPage;
