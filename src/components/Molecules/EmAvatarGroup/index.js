import React from 'react';
import PropTypes from "prop-types";
import { AvatarGroup } from '@material-ui/lab';
import EmAvatar from '../../Atoms/EmAvatar';
import "./index.scss"

const EmAvatarGroup = ({
  avatarList,
  maxAvatarDisplay
}) => {
  return (
    <AvatarGroup className='em-avatar-group' max={maxAvatarDisplay} >
      {avatarList.map((list, index) => {
        return (
          <EmAvatar
            variant='circular'
            avatarSrc={list.avatarSrc}
            avatarAlt={list.avatarAlt}
            bgColor={list.avatarBgColor}
            textColor='#FFF'
            avatarSize={list.avatarSize}
            key={index}
          />
        )
      })}

    </AvatarGroup>
  );
};

EmAvatarGroup.propTypes = {
  avatarList: PropTypes.array,
  maxAvatarDisplay: PropTypes.number,
};

export default EmAvatarGroup;