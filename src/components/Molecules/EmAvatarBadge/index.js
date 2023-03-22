import React from 'react';
import PropTypes from "prop-types";
import { Badge } from '@material-ui/core';
import EmAvatar from 'components/Atoms/EmAvatar';
import "./index.scss";

const EmAvatarBadge = ({
  variant = "circular",
  avatarSrc,
  avatarAlt,
  avatarSize,
  avatarClick,
  badgeCount,
  badgeVariant
}) => {
  return (
    <div className={`em-avatar-badge ${variant} ${avatarSize}`}>
      <Badge badgeContent={badgeCount} color="secondary" variant={badgeVariant} overlap='rectangular' anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}>
        <EmAvatar
          variant={variant}
          avatarSrc={avatarSrc}
          avatarAlt={avatarAlt}
          avatarSize={avatarSize}
          onClick={avatarClick}
        />
      </Badge>
    </div>
  );
};

EmAvatarBadge.propTypes = {
  variant: PropTypes.string,
  avatarSrc: PropTypes.string,
  avatarAlt: PropTypes.string,
  avatarSize: PropTypes.string,
  badgeCount: PropTypes.number,
  badgeVariant: PropTypes.string,
};

export default EmAvatarBadge;