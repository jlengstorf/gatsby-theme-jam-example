import React from 'react';
import LoadingProgress from '../components/Progress/LoadingProgress';
import { handleAuthentication } from '../utils/Auth';

const Callback = () => {
  handleAuthentication();
  return (
        <div>
          <LoadingProgress />
        </div>
  );
};

export default Callback;
