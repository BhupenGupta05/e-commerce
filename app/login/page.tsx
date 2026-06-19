import { redirect } from 'next/navigation';
import LoginForm from './LoginForm';
import { getServerSession } from 'next-auth';
import authOptions from '@/lib/auth';

export default async function LoginPage() {

  const session = await getServerSession(authOptions);

  if(session?.user) {
    redirect("/discover");
  }

  return (
    <LoginForm />
  )
}

