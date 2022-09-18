import Spinner from 'react-bootstrap/Spinner';

function Loader() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col d-flex justify-content-center my-5'>
          <Spinner animation='grow' variant='primary' size='sm' />
          <Spinner animation='grow' variant='secondary' size='sm' />
          <Spinner animation='grow' variant='success' size='sm' />
          <Spinner animation='grow' variant='danger' size='sm' />
          <Spinner animation='grow' variant='warning' size='sm' />
          <Spinner animation='grow' variant='info' size='sm' />
          <Spinner animation='grow' variant='light' size='sm' />
        </div>
      </div>
    </div>
  );
}

export default Loader;
