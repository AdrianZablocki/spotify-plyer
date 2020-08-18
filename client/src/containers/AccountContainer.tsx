import styled from '@emotion/styled';
import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ButtonPrimary from 'src/components/ButtonPrimary';

import useUser from 'src/hooks/use-user';

const AccountContainerWrapper = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 width: 100%;
 height: 100%;
`;

const UserWrapper = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`;

function AccountContainer(): JSX.Element {
  const history = useHistory();
  const { isLoading, hasError, sendRequest, response } = useUser();

  useEffect(() => {
    sendRequest();
  }, []);

  const redirectToPlayLists = useCallback(() => {
    history.push('/lists');
  }, [history]);

  return (
    <AccountContainerWrapper data-test="section-account">
      {isLoading && <div>spiner</div>}
      {hasError && <div>error message</div>}
      {response && (
        <UserWrapper data-test="section-account2">
          <div className="huj">User: {response.display_name}</div>
          <div>Email: {response.email}</div>
          <div>Type: {response.product}</div>
          <ButtonPrimary click={redirectToPlayLists} content="Go to play list" />
        </UserWrapper>
      )}
    </AccountContainerWrapper>
  );
}

export default AccountContainer;
