

function AccessToken() {
  return (
    <div className="ml-10 mr-5">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          🏆Refresh token and Access token in jwt
        </h1>
        <h1 className="text-3xl font-bold mb-4 border-b pb-10">
          What is JWT? ❓🤔
        </h1>
        <p className="mb-8">
          JSON Web Tokens (JWT) are a popular method for securely transmitting
          information between parties as a JSON object. JWTs consist of three
          parts: a header, a payload, and a signature. They are often used for
          authentication and information exchange in web applications. Within
          JWT-based authentication systems, access tokens and refresh tokens
          play crucial roles in managing user sessions securely.
        </p>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Access Token 👁️:</h2>
          <p className="mb-2">
            An access token is a credential used to access protected resources
            on behalf of a user. It typically contains information about the
            user’s identity (such as user ID), permissions (scopes), and
            possibly additional metadata. Access tokens have a limited lifespan,
            typically ranging from a few minutes to a few hours, after which
            they expire. They are short-lived for security reasons, reducing the
            window of opportunity for attackers in case the token is
            compromised. Once an access token expires, the client must obtain a
            new one to continue accessing protected resources.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">Refresh Token 🔃:</h2>
          <p className="mb-2">
            A refresh token is a credential used to obtain a new access token
            when the current access token expires. Refresh tokens are long-lived
            compared to access tokens, often lasting days, weeks, or even
            months. They are securely stored on the client-side (typically in an
            HTTP-only cookie or local storage) and are used to request new
            access tokens without requiring the user to reauthenticate. Refresh
            tokens are valuable targets for attackers since compromising a
            refresh token can lead to prolonged unauthorized access. It’s
            important to handle refresh tokens securely, such as transmitting
            them over HTTPS and storing them securely on the client-side.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AccessToken