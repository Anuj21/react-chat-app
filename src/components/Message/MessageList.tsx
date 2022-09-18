import { lazy, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import EmptyMessage from './EmptyMessage';
import { IMessage } from './IMessageTypes';
import Loader from './Loader';
import './Message.css';

const MessageComponent = lazy(() => import('./MessageComponent'));

const MessageList = (props: {
  messages: Array<IMessage>;
  newMessage: IMessage;
}) => {
  const [chat, setChat] = useState(props.messages);
  const [hasMoreItems, sethasMoreItems] = useState(true);
  const oldMessagesData = [
    {
      text: 'First Message',
      createdAt: new Date('March 13, 2022 04:20'),
    },
    {
      text: "who'll win Doe?",
      createdAt: new Date('March 11, 2022 14:20'),
    },
    {
      text: "who'll win John?",
      createdAt: new Date('March 13, 2022 04:20'),
    },
    {
      text: "who'll win Doe?",
      createdAt: new Date('March 11, 2022 14:20'),
    },
    {
      text: "who'll win John?",
      createdAt: new Date('March 13, 2022 04:20'),
    },
    {
      text: "who'll win Doe?",
      createdAt: new Date('March 11, 2022 14:20'),
    },
    {
      text: "who'll win John?",
      createdAt: new Date('March 13, 2022 04:20'),
    },
    {
      text: "who'll win Doe?",
      createdAt: new Date('March 11, 2022 14:20'),
    },
    {
      text: "who'll win John?",
      createdAt: new Date('March 13, 2022 04:20'),
    },
    {
      text: "who'll win Doe?",
      createdAt: new Date('March 11, 2022 14:20'),
    },
    {
      text: "who'll win John?",
      createdAt: new Date('March 13, 2022 04:20'),
    },
    {
      text: "who'll win Doe?",
      createdAt: new Date('March 11, 2022 14:20'),
    },
    {
      text: "who'll win John?",
      createdAt: new Date('March 13, 2022 04:20'),
    },
    {
      text: "who'll win Doe?",
      createdAt: new Date('March 11, 2022 14:20'),
    },
    {
      text: "who'll win John?",
      createdAt: new Date('March 13, 2022 04:20'),
    },
    {
      text: 'Lasat Message',
      createdAt: new Date('March 11, 2022 14:20'),
    },
  ];

  const fetchMoreData = () => {
    if (chat.length >= 100) {
      sethasMoreItems(false);
      return;
    }
    setTimeout(() => {
      setChat([...chat, ...oldMessagesData]);
    }, 500);
  };

  useEffect(() => {
    if (props.newMessage.text !== '') {
      setChat([...[props.newMessage], ...chat]);
    }
  }, [props.newMessage]);

  return (
    <div className='Message-List-Container' id='scrollableDiv'>
      <InfiniteScroll
        style={{ display: 'flex', flexDirection: 'column-reverse' }}
        dataLength={chat.length}
        next={fetchMoreData}
        inverse={true}
        hasMore={hasMoreItems}
        loader={<Loader />}
        endMessage={<EmptyMessage />}
        scrollableTarget='scrollableDiv'
      >
        {chat.map((item, index) => {
          return (
            <MessageComponent key={index} message={item}></MessageComponent>
          );
        })}
      </InfiniteScroll>
    </div>
  );
};

export default MessageList;
