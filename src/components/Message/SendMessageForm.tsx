import { useState } from 'react';
import './Message.css';

function SendMessageForm(props: {
  handleSubmit: (event: any, message: string) => void;
}) {
  const [value, setValue] = useState('');

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const clearField = (event: any) => {
    if (event.key === 'Enter' && event.shiftKey === false) {
      setValue('');
    }
  };

  return (
    <input
      className='Message-input'
      type='textarea'
      placeholder='TEXT TO APPEND...'
      value={value}
      onChange={handleChange}
      onKeyPress={(event) => {
        props.handleSubmit(event, value);
        clearField(event);
      }}
    />
  );
}

export default SendMessageForm;
