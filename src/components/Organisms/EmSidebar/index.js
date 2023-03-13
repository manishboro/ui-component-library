import * as React from 'react';
import { ListSubheader } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Collapse } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import ReviewerProfile from 'components/Molecules/Review/ReviewerProfile';

export default function EmSidebar() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            subheader={
                <ListSubheader component="div" >
                    <ReviewerProfile
                        variant="circular"
                        avatarSize="medium"
                        reviewerImg="/images/profile-1.jpg"
                        reviewerName="Vikram Singh"
                        textLabel={false}
                        time="vikrambetal911@gmail.com" />
                </ListSubheader>
            }>
            <ListItem button>
                <ListItemIcon>
                    <img src="/images/icons/clock-b.svg" width="24" height="24" alt="jambo" title="Scheduled Message" />
                </ListItemIcon>
                <ListItemText primary="Scheduled Message" />
            </ListItem>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItem>
                </List>
            </Collapse>
        </List>
    );
}