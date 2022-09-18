import { IMessage } from './IMessageTypes';
import './Message.css';

const MessageComponent = (props: { message: IMessage }) => {
  const { message } = props;
  return (
    <div className='Message-Container'>
      <div className='timestamp'>
        {message.createdAt.toLocaleString('fr-FR', { hour12: false })}
      </div>
      <div>
        <p className='message'>{message.text}</p>
      </div>
    </div>
  );
};

export default MessageComponent;
