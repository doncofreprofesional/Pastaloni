import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';

interface AuthConfig {
  clientId: string;
  domain: string;
}

const authConfig: AuthConfig = {
  clientId: '<YOUR_CLIENT_ID>',
  domain: '<YOUR_DOMAIN>.auth0.com',
};

export const loginWithAuth0 = async (): Promise<string | null> => {
  const discovery = {
    authorizationEndpoint: `https://${authConfig.domain}/authorize`,
    tokenEndpoint: `https://${authConfig.domain}/oauth/token`,
  };

  // Configura la solicitud de autenticación
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: authConfig.clientId,
      scopes: ['openid', 'profile', 'email'],
      redirectUri: makeRedirectUri({
        scheme: 'yourapp',
      }),
    },
    discovery,
  );

  // Lanza el flujo de autenticación
  if (request) {
    const result = await promptAsync();
    if (result.type === 'success') {
      return result.params.access_token || null;
    }
  }

  return null;
};
