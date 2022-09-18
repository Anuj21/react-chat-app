import Spinner from 'react-bootstrap/Spinner';

function Loader() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col d-flex justify-content-center my-5'>
          <Spinner animation='grow' variant='primary' />
          <Spinner animation='grow' variant='secondary' />
          <Spinner animation='grow' variant='success' />
          <Spinner animation='grow' variant='danger' />
          <Spinner animation='grow' variant='warning' />
          <Spinner animation='grow' variant='info' />
          <Spinner animation='grow' variant='light' />
        </div>
      </div>
    </div>
  );
}

export default Loader;
