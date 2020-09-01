import React, { MouseEventHandler } from 'react';
import Button from '@material-ui/core/Button';

interface Properties {
  content: string;
  href?: string;
  click?: MouseEventHandler;
}
function ButtonPrimary({ content, href, click }: Properties): JSX.Element {
  return (
    <Button
      data-test="anchor-login"
      variant="contained"
      color="primary"
      href={href}
      style={{ background: '#0FD55A' }}
      onClick={click}
    >
      {content}
    </Button>
  );
}

export default ButtonPrimary;
