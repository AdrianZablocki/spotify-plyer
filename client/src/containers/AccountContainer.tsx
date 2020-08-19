import styled from '@emotion/styled';
import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ButtonPrimary from 'src/components/ButtonPrimary';

import useUser from 'src/hooks/use-user';

const AccountContainerWrapper = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: flex-end;
 align-items: center;
 width: 100%;
 height: 100%;
 padding-bottom: 180px;
 box-sizing: border-box;
`;

const UserWrapper = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`;

const User = styled.div`
  margin-bottom: 50px;
  color: #FFF;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  letter-spacing: .5px;
  text-align: center;
`;

const UserName = styled.div`
  font-size: 22px;
  color: #0FD55A;
  margin-bottom: 10px;
`;
const UserMail = styled.div`
  font-size: 16px;
  color: #626262;
`;
const UserAccountType = styled.div`
  text-transform: uppercase;
  margin-top: 10px;
  font-size: 14px;
  color: #626262;
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
          <User>
            <UserName>{response.display_name}</UserName>
            <UserMail>{response.email}</UserMail>
            <UserAccountType>{response.product}</UserAccountType>
          </User>
          <ButtonPrimary click={redirectToPlayLists} content="Go to play list" />
        </UserWrapper>
      )}
    </AccountContainerWrapper>
  );
}

export default AccountContainer;
