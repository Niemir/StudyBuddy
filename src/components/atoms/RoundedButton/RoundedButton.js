import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { ReactComponent as DocsIcon } from 'assets/icons/docs-icon.svg';
import { ReactComponent as MessageIcon } from 'assets/icons/message-icon.svg';
import { StyledButton } from 'components/atoms/RoundedButton/RoundedButton.styles';

const getIcon = (icon) => {
  switch (icon) {
    case 'docs':
      return <DocsIcon />;
    case 'delete':
      return <DeleteIcon />;
    case 'message':
      return <MessageIcon />;
    default:
      return <DeleteIcon />;
  }
};
const RoundedButton = ({ iconType, ...rest }) => <StyledButton {...rest}>{getIcon(iconType)}</StyledButton>;

export default RoundedButton;

RoundedButton.propTypes = {
  iconType: PropTypes.string,
};
