import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import {useSelector} from 'react-redux'
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton'
import Input from '@material-ui/core/Input'
import Moment from 'moment';
import ChatUserList from 'components/chatPanel/ChatUserList';
import conversations from '../data/conversationList';
import Conversation from 'components/chatPanel/Conversation/index';
import users from '../data/chatUsers';
import ContactList from 'components/chatPanel/ContactList/index';
import SearchBox from 'components/SearchBox/index';
import IntlMessages from 'util/IntlMessages';
import CustomScrollbars from 'util/CustomScrollbars';

const ChatPanel = () => {


  const [loader, setLoader] = useState(false);
  const [userNotFound, setUserNotFound] = useState("No user found");
  const [drawerState, setDrawerState] = useState(false);
  const [selectedSectionId, setSelectedSectionId] = useState("");
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [userState, setUserState] = useState(1);
  const [searchChatUser, setSearchChatUser] = useState("");
  const [contactList, setContactList] = useState(users.filter(user => !user.recent));
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState("");
  const [chatUsers, setChatUsers] = useState(users.filter(user => user.recent));
  const [conversationList, setConversationList] = useState(conversations);
  const [conversation, setConversation] = useState(null);

  const {width} = useSelector(({settings}) => settings);

  const filterContact = (userName) => {
    if (userName === '') {
      return users.filter(user => !user.recent);
    }
    return users.filter((user) =>
        !user.recent && user.name.toLowerCase().indexOf(userName.toLowerCase()) > -1
    );
  };
  const filterUsers = (userName) => {
    if (userName === '') {
      return users.filter(user => user.recent);
    }
    return users.filter((user) =>
        user.recent && user.name.toLowerCase().indexOf(userName.toLowerCase()) > -1
    );
  };
  const Communication = () => {
    const {conversationData} = conversation;
    return <div className="chat-main">
      <div className="chat-main-header">
        <IconButton className="d-block d-xl-none chat-btn" aria-label="Menu"
                    onClick={onToggleDrawer}>
          <i className="zmdi zmdi-comment-text"/>
        </IconButton>
        <div className="chat-main-header-info">

          <div className="chat-avatar mr-2">
            <div className="chat-avatar-mode">
              <img src={selectedUser.thumb}
                   className="rounded-circle size-60"
                   alt=""/>

              <span className={`chat-mode ${selectedUser.status}`}/>
            </div>
          </div>

          <div className="chat-contact-name">
            {selectedUser.name}
          </div>
        </div>

      </div>

      <CustomScrollbars className="chat-list-scroll scrollbar"
                        style={{height: width >= 1200 ? 'calc(100vh - 300px)' : 'calc(100vh - 269px)'}}>
        <Conversation conversationData={conversationData}
                      selectedUser={selectedUser}/>
      </CustomScrollbars>

      <div className="chat-main-footer">
        <div className="d-flex flex-row align-items-center" style={{maxHeight: 51}}>
          <div className="col">
            <div className="form-group">
                            <textarea
                                id="required" className="border-0 form-control chat-textarea"
                                onKeyUp={handleKeyPress}
                                onChange={updateMessageValue}
                                value={message}
                                placeholder="Type and hit enter to send message"
                            />
            </div>
          </div>
          <div className="chat-sent">
            <IconButton
              onClick={submitComment}
              aria-label="Send message">
              <i className="zmdi  zmdi-mail-send"/>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  };

  const AppUsersInfo = () => {
    return <div className="chat-sidenav-main">
      <div className="bg-grey lighten-5 chat-sidenav-header">

        <div className="chat-user-hd mb-0">
          <IconButton className="back-to-chats-button" aria-label="back button"
                      onClick={() => {
                        setUserState(1)
                      }}>
            <i className="zmdi zmdi-arrow-back"/>
          </IconButton>
        </div>
        <div className="chat-user chat-user-center">
          <div className="chat-avatar mx-auto">
            <img src="https://via.placeholder.com/150x150"
                 className="avatar avatar-shadow rounded-circle size-60 huge" alt="John Doe"/>
          </div>

          <div className="user-name h4 my-2">Robert Johnson</div>

        </div>
      </div>
      <div className="chat-sidenav-content">

        <CustomScrollbars className="chat-sidenav-scroll scrollbar"
                          style={{height: width >= 1200 ? 'calc(100vh - 323px)' : 'calc(100vh - 162px)'}}>
          <form className="p-4">
            <div className="form-group mt-4">
              <label>Mood</label>

              <Input
                  fullWidth={true}
                  id="exampleTextarea"
                  multiline
                  rows={3}
                  onKeyUp={handleKeyPress}
                  onChange={updateMessageValue}
                  defaultValue="it's a status....not your diary..."
                  placeholder="Status"
                  margin="none"/>

            </div>
          </form>
        </CustomScrollbars>

      </div>
    </div>
  };
  const ChatUsers = () => {
    return <div className="chat-sidenav-main">

      <div className="chat-sidenav-header">

        <div className="chat-user-hd">

          <div className="chat-avatar mr-3" onClick={() => {
            setUserState(2)
          }}>
            <div className="chat-avatar-mode">
              <img id="user-avatar-button" src="https://via.placeholder.com/150x150"
                   className="rounded-circle size-50"
                   alt=""/>
              <span className="chat-mode online"/>
            </div>
          </div>

          <div className="module-user-info d-flex flex-column justify-content-center">
            <div className="module-title">
              <h5 className="mb-0">Robert Johnson</h5>
            </div>
            <div className="module-user-detail">
              <span className="jr-link text-grey">robert@example.com</span>
            </div>
          </div>
        </div>

        <div className="search-wrapper">

          <SearchBox placeholder="Search or start new chat"
                     onChange={updateSearchChatUser}
                     value={searchChatUser}/>

        </div>
      </div>

      <div className="chat-sidenav-content">
        <AppBar position="static" className="no-shadow chat-tabs-header">
          <Tabs
            className="chat-tabs"
            value={selectedTabIndex}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth">
            <Tab label={<IntlMessages id="chat.chatUser"/>}/>
            <Tab label={<IntlMessages id="chat.contacts"/>}/>
          </Tabs>
        </AppBar>
        <SwipeableViews
          index={selectedTabIndex}
          onChangeIndex={handleChangeIndex}
        >
          <CustomScrollbars className="chat-sidenav-scroll scrollbar"
                            style={{height:width >= 1200 ? 'calc(100vh - 323px)' : 'calc(100vh - 202px)'}}>
            {chatUsers.length === 0 ?
              <div className="p-5">{userNotFound}</div>
              :
              <ChatUserList chatUsers={chatUsers}
                            selectedSectionId={selectedSectionId}
                            onSelectUser={onSelectUser}/>
            }
          </CustomScrollbars>

          <CustomScrollbars className="chat-sidenav-scroll scrollbar"
                            style={{height: width >= 1200 ? 'calc(100vh - 323px)' : 'calc(100vh - 202px)'}}>
            {
              contactList.length === 0 ?
                <div className="p-5">{userNotFound}</div>
                :
                  <ContactList contactList={contactList}
                               selectedSectionId={selectedSectionId}
                               onSelectUser={onSelectUser}/>
            }
          </CustomScrollbars>
        </SwipeableViews>

      </div>
    </div>
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
     submitComment();
    }
  };

  const handleChange = (event, value) => {
    setSelectedTabIndex(value)
  };

  const handleChangeIndex = index => {
    setSelectedTabIndex(index)
  };
  const onSelectUser = (user) => {
    setLoader(true);
    setSelectedSectionId(user.id);
    setDrawerState(drawerState);
    setSelectedUser(user);
    setConversation(conversationList.find((data) => data.id === user.id));
    setTimeout(() => {
     setLoader(false)
    }, 1500);
  };
  const showCommunication = () => {
    return (
        <div className="chat-box">
          <div className="chat-box-main">{
           selectedUser === null ?
                <div className="loader-view" style={{height: 'calc(100vh - 120px)'}}>
                  <i className="zmdi zmdi-comment s-128 text-muted"/>
                  <h1 className="text-muted">{<IntlMessages id="chat.selectUserChat"/>}</h1>
                  <Button className="d-block d-xl-none" color="primary"
                          onClick={onToggleDrawer}>{<IntlMessages
                      id="chat.selectContactChat"/>}</Button>
            </div>
            : Communication()}
        </div>
      </div>)
  };

  const submitComment = () => {
    if (message !== '') {
      const updatedConversation = conversation.conversationData.concat({
        'type': 'sent',
        'message': message,
        'sentAt': Moment().format('hh:mm:ss A'),
      });
      setConversation({
        ...conversation, conversationData: updatedConversation
      });
      setMessage(message);
      setConversationList(conversationList.map(conversationData => {
        if (conversationData.id === conversation.id) {
          return {...conversation, conversationData: updatedConversation};
        } else {
          return conversationData;
        }
      }))
    }
  };

  const updateMessageValue = (evt) => {
    setMessage(evt.target.value)
  };

  const updateSearchChatUser = (evt) => {
    setSearchChatUser(evt.target.value);
    setContactList(filterContact(evt.target.value));
    setChatUsers(filterUsers(evt.target.value));
  };

  const onToggleDrawer = () => {
    setDrawerState(!drawerState);
  };

    return (
      <div className="app-wrapper app-wrapper-module">
        <div className="app-module chat-module animated slideInUpTiny animation-duration-3">
          <div className="chat-module-box">
            <div className="d-block d-xl-none">
              <Drawer open={drawerState}
                      onClose={onToggleDrawer}>
                {userState === 1 ? ChatUsers() : AppUsersInfo()}
              </Drawer>
            </div>
            <div className="chat-sidenav d-none d-xl-flex">
              {userState === 1 ? ChatUsers() : AppUsersInfo()}
            </div>
            {loader ?
                <div className="loader-view w-100"
                     style={{height: 'calc(100vh - 120px)'}}>
                  <CircularProgress/>
                </div> : showCommunication()
            }
          </div>
        </div>
      </div>
    )
};

export default ChatPanel;