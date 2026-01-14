import React from 'react';
import './Contacts.css';

function Contacts() {

    const parts = ["bGF1dGFudGVndW", "gxQGdtYWlsLmNvbQ=="];
    const email = atob(parts.join(""));


    return (
        <div className="contacts-page">
            <h1 className="contacts-heading">Contact Us</h1>
            <div className="contacts-info">
                <p>If you have any questions or need assistance, feel free to reach out to us:</p>
                <p><strong>Email:</strong> <a href={`mailto:${email}`} id={"email"}>{email}</a></p>
                <p><strong>Phone:</strong> (123) 456-7890</p>
                <p><strong>Address:</strong> 123 Main Street, Anytown, USA</p>
                <p><br/>We'd love to hear from you!</p>
            </div>
        </div>
    );
}

export default Contacts;