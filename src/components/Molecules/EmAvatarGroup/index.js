import React from 'react';
import PropTypes from "prop-types";
import EmAvatar from 'components/Atoms/EmAvatar';
import { AvatarGroup } from '@material-ui/lab';
import "./index.scss"

const EmAvatarGroup = ({
  avatarList,
}) => {
  return (
    <AvatarGroup className='em-avatar-group' max={4} >
      {avatarList.map((list) => {
        return (
          <EmAvatar
            variant='circular'
            avatarSrc={list.avatarSrc}
            avatarAlt={list.avatarAlt}
            avatarSize={list.avatarSize}
          />
        )
      })}

    </AvatarGroup>
  );
};

EmAvatarGroup.propTypes = {
  avatarList: PropTypes.array,
};

export default EmAvatarGroup;