import { lazy, Suspense, useState } from 'react';
import { IMessage } from '../Message/IMessageTypes';
import { messages } from '../Message/mock';
import SendMessageForm from '../Message/SendMessageForm';
import './App.css';

const MessageListCopy = lazy(() => import('../Message/MessageList'));

function App() {
  const [newMessage, setNewMessage] = useState<IMessage>({
    text: '',
    createdAt: new Date(),
  });

  const handleSubmit = (event: any, message: string) => {
    if (event.key === 'Enter' && event.shiftKey === false) {
      setNewMessage({
        createdAt: new Date(),
        text: message,
      });
      event.preventDefault();
    }
  };

  return (
    <div className='App'>
      <Suspense fallback={<div>isLoading...</div>}>
        <MessageListCopy messages={messages} newMessage={newMessage} />
      </Suspense>
      <SendMessageForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
