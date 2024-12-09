
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const MailboxForm = ({ addMailbox, mailboxes }) => {
    const [formData, setFormData] = useState({
      name: '', 
      boxholder: '',
      boxSize: 'Small',
    });
  

const navigate = useNavigate();

useEffect(() => {
    const newMailboxName = `Mailbox ${mailboxes.length + 1}`;
    setFormData((prevData) => ({
      ...prevData,
      name: newMailboxName, 
    }));
  }, [mailboxes.length]); 

const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
    };


const handleSubmit = (e) => {
    e.preventDefault();
    addMailbox(formData); 
    setFormData({ name: '', boxholder: '', boxSize: 'Small' }); 
    navigate('/mailboxes'); 
    };


    return (
    <main>
      <h1>New Mailbox</h1>

        <form onSubmit={handleSubmit}>

          <label htmlFor="boxholder">Boxholder Name:</label>
          <input
            type="text"
            id="boxholder"
            name="boxholder"
            value={formData.boxholder}
            onChange={handleChange}
            required
          />
    
          <label htmlFor="boxSize">Box Size:</label>
          <select
            name="boxSize"
            id="boxSize"
            value={formData.boxSize}
            onChange={handleChange}
            required
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
    
          <button type="submit">Create Mailbox</button>
        </form>
        </main>
      );
    };
    
    export default MailboxForm;
