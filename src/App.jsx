import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MailboxList from './components/MailboxList';
import NavBar from './components/NavBar';
import MailboxDetails from './components/MailboxDetails';
import MailboxForm from './components/MailboxForm';

const initialState = [
  { _id: 1, name: 'Mailbox 1', boxSize: 'Small', boxholder: 'Alex' },
  { _id: 2, name: 'Mailbox 2', boxSize: 'Large', boxholder: 'Zoe' },
  { _id: 3, name: 'Mailbox 3', boxSize: 'Small', boxholder: 'Greg' },
];

const App = () => {
  const [mailboxes, setMailboxes] = useState(initialState);

 
  const addMailbox = (newMailboxData) => {
    const newMailbox = {
      ...newMailboxData,
      _id: mailboxes.length + 1, 
    };

    setMailboxes([...mailboxes, newMailbox]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h2>Post Office</h2>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
        <Route 
          path="/mailbox/new" 
          element={<MailboxForm addMailbox={addMailbox} mailboxes={mailboxes} />} 
        />
      </Routes>
    </>
  );
};

export default App;
