import React from 'react';
import { useAuth } from 'hooks/useAuth';
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage';
import { useError } from 'hooks/useError';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';

const Root = () => {
  const auth = useAuth();
  const { error } = useError();
  return (
    <>
      {error && <ErrorMessage message={error} />}
      {auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </>
  );
};

export default Root;
