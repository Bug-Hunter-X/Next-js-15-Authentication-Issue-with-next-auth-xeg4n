```javascript
// pages/about.js
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);

  return {
    props: {
      session: JSON.stringify(session) // Serialize session for client-side use
    }
  };
}

export default function About({ session }) {
  const parsedSession = JSON.parse(session); // Parse session on client-side
  return (
    <div>
      <h1>About Page</h1>
      {parsedSession ? (
        <p>You are logged in as {parsedSession.user.email}</p>
      ) : (
        <p>You are not logged in</p>
      )}
    </div>
  );
}
```