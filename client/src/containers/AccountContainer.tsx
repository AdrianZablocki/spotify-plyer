import React, { useContext, useEffect } from 'react';

import HttpContext from 'src/contexts/HttpContext';

function AccountContainer(): JSX.Element {
  const http = useContext(HttpContext);

  useEffect(() => {
    http.get('').then((res) => console.log(res));
  }, []);

  return (
    <div>User account</div>
  );
}

export default AccountContainer;
