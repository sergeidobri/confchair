import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/call-for-papers')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/call-for-papers"!</div>;
}
