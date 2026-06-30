import { redirect } from 'next/navigation';
import LoginForm from './LoginForm';
import { getSession } from '@/lib/session';

export default async function LoginPage() {

  const session = await getSession();

  if (session?.user) redirect("/discover");

  return (
    <LoginForm />
  )
}

