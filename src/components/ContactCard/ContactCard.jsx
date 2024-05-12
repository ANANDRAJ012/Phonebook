import React, { useState } from 'react';
import ThemeSelectionPage from '../theme/ThemeSelectionPage';

// import DarkMode from '../DarkMode/DarkMode';



const ContactCard = () => {
    const [contacts, setContacts] = useState([]);
    const [newContact, setNewContact] = useState({ name: '', phone: '' });
    const [editIndex, setEditIndex] = useState(-1); // Index of the contact being edited
    const [theme, setTheme] = useState(); // Default theme


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewContact((prevContact) => ({
            ...prevContact,
            [name]: value,
        }));
    };

    const handleAddContact = () => {
        if (newContact.name && newContact.phone) {
            if (editIndex !== -1) {
                // If editing an existing contact
                const updatedContacts = [...contacts];
                updatedContacts[editIndex] = newContact;
                setContacts(updatedContacts);
                setEditIndex(-1);
            } else {
                // If adding a new contact
                const existingNameIndex = contacts.findIndex(
                    (contact) => contact.name == newContact.name
                );
                const existingPhoneIndex = contacts.findIndex(
                    (contact) => contact.phone == newContact.phone
                );
                if (existingNameIndex !== -1) {
                    // Contact with the same name already exists
                    alert('SAME NAME already exists. Please use a different name.');
                    return;
                }
                if (existingPhoneIndex !== -1) {
                    // Contact with the same phone number already exists
                    alert('SAME PHONE NUMBER already exists. Please use a different phone number.');
                    return;
                }
                setContacts([...contacts, newContact]);
            }
            setNewContact({ name: '', phone: '' });
        }
    };

    const handleEditContact = (index) => {
        setNewContact(contacts[index]);
        setEditIndex(index);
    };

    const handleDeleteContact = (index) => {
        const updatedContacts = contacts.filter((_, i) => i !== index);
        setContacts(updatedContacts);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddContact();
        }
    };

    return (
        <>
        
        <div className={`min-h-screen ${theme} text-slate flex flex-col items-center justify-center `}>
        
             <ThemeSelectionPage setTheme={setTheme} /> {/* Pass setTheme prop */}
             {/* <DarkMode/> */}
             
            <div className="max-w-xl mx-auto p-6 rounded-lg shadow-md">
            {/* <div className="max-w-xl mx-auto p-6  rounded-lg shadow-xl"> */}
                <h1 className="text-5xl text-center font-bold mb-2">Phonebook</h1>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={newContact.name}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    className="w-full mb-2 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 bg-transparent "
                />
                <input
                    type="tel" // Use "tel" for telephone numbers
                    name="phone"
                    placeholder="Phone Number"
                    value={newContact.phone}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    className="w-full mb-2 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 bg-transparent "
                />

                <button
                    onClick={handleAddContact}
                    className="w-full bg-blue-500 hover:bg-blue-700  font-bold py-2 px-4 rounded-md mt-2"
                >
                    {editIndex !== -1 ? 'Save Changes' : 'Add Contact'}
                </button>
                <div className="mt-4 border-gray-300 box-border">
                    {contacts.map((contact, index) => (
                        <div key={index} className="border border-white-300 rounded-md p-2 mb-2 flex items-center justify-between">
                            <div>
                                <p className="font-semibold">Name: {contact.name}</p>
                                <p className="">Phone: {contact.phone}</p>
                            </div>
                            <div className="flex">
                                <button
                                    onClick={() => handleEditContact(index)}
                                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded-md mr-2"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDeleteContact(index)}
                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded-md"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
};

export default ContactCard;
