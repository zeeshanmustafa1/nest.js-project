/* eslint-disable no-console */
import { onError } from '@apollo/client/link/error';

export enum GraphQLExceptionCode {
  AuthNotAuthenticated = 'AuthNotAuthenticated',
  ApiInputInvalid = 'ApiInputInvalid',
}

const handleUnAuthenticated = (code: unknown) => {
  if (typeof code !== 'string') return;

  if (code === GraphQLExceptionCode.AuthNotAuthenticated) {
    if (typeof window !== 'undefined') {
      // TODO : Implement sign out function
      // return signOut({ callbackUrl: LOGIN });
    }
  }
};

export const onErrorHandler = onError((error) => {
  const { graphQLErrors, networkError, operation } = error;
  if (graphQLErrors) {
    graphQLErrors.forEach((errors) => {
      const { message, extensions, locations, path } = errors;
      console.log(
        `[GraphQL error]: Message: ${message}, ErrorCode: ${
          extensions?.code
        }, Location: ${JSON.stringify(
          locations
        )}, Path: ${path}, Stacktrace: ${JSON.stringify(extensions)}`
      );

      if (extensions?.code) {
        return handleUnAuthenticated(extensions?.code);
      }

      return null;
    });
  }
  if (networkError)
    console.log(
      `[Network error]: ${networkError} on ${operation}. Backend is unreachable. Is it running?`
    );
});
