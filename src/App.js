import React from 'react';
import './index.scss';
const Modal = ({open, setOpen, children}) => (

    <div className={`overlay animated ${open ? 'show' : ''}`}>
        <div className="modal">
            <svg onClick={() => setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
                <title />
                <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
            </svg>
            {children}
        </div>
    </div>
);

function App() {
    const [open, setOpen] = React.useState(false);
  return (
    <div className="App">
      <button onClick={() => setOpen(true)} className="open-modal-btn">
          ✨ Open the window
      </button>
        <Modal open ={open} setOpen={setOpen}>
            <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExamd4bzkxcnZ0bjR0bmM1YmJqYWM1emVieTl6Ynl1M3Z0ZXUxem9xZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6ZtcSdUdVoKxMldS/giphy.gif" alt='Eleven'/>

            <h3>This is a modal window</h3>
        </Modal>
    </div>
  );
}

export default App;
