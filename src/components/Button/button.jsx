import React from 'react';
import { LoadMore } from './button.styled';

function Button({ onLoadMore }) {
  return (
    <LoadMore type="button" onClick={onLoadMore}>
      Load more
    </LoadMore>
  );
}

export default Button;
