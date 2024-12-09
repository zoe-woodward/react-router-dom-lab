import { useParams } from 'react-router-dom';

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();
  
  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  if (!selectedBox) {
    return <h2>Mailbox not found!</h2>;
  }
  return (
    <div>
      <h2>Mailbox Details</h2>
      <p><strong>Name:</strong> {selectedBox.name}</p>
      <p><strong>Box Size:</strong> {selectedBox.boxSize}</p>
      <p><strong>Boxholder:</strong> {selectedBox.boxholder}</p>
    </div>
  );
};

export default MailboxDetails;
