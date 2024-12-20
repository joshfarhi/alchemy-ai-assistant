"use client";

import React, { useState } from 'react';

const ChatPage: React.FC = () => {
    const [messages, setMessages] = useState<{ user: string; text: string }[]>([]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, { user: 'You', text: input }]);
            setInput('');
            // Here you can add the logic to send the input to your API and get the response
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.chatBox}>
                {messages.map((message, index) => (
                    <div key={index} style={styles.message}>
                        <strong>{message.user}: </strong>
                        <span>{message.text}</span>
                    </div>
                ))}
            </div>
            <div style={styles.inputContainer}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    style={styles.input}
                    placeholder="Type your message..."
                />
                <button onClick={handleSend} style={styles.button}>
                    Send
                </button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    chatBox: {
        width: '80%',
        height: '70%',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '10px',
        overflowY: 'scroll' as 'scroll',
        backgroundColor: '#fff',
    },
    message: {
        margin: '10px 0',
    },
    inputContainer: {
        display: 'flex',
        width: '80%',
        marginTop: '10px',
    },
    input: {
        flex: 1,
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    button: {
        padding: '10px 20px',
        marginLeft: '10px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#007bff',
        color: '#fff',
        cursor: 'pointer',
    },
};

export default ChatPage;