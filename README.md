# Next.js 15 Authentication Issue with next-auth

This repository demonstrates a common authentication issue in Next.js 15 when using `next-auth`. The problem occurs when trying to access session data on the client-side after successful server-side authentication. The session object is correctly retrieved on the server but does not properly propagate to the client-side component.

## Bug Description
The About page fails to render the user's email after successful authentication. The session object is available server-side but not on the client-side.