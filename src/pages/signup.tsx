import { useState } from 'react';
import { useRouter } from 'next/router';
// Import any necessary components

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, email }),
    });

    const data = await response.json();

    if (data.success) {
      // Redirect to the login page after successful registration
      router.push('/signin');
    } else {
      // Handle error
    }
  }

  return (
    <div>
      {/* Your sign-up form using Tailwind CSS */}
    </div>
  );
}
