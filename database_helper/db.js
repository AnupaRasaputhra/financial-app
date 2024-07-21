
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, onValue, off } from 'firebase/database';
import config from '../config';

const firebaseConfig = config.firebaseConfig;
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

let transactionsSnapshot = [];

// Function to fetch transactions and set up real-time listener
const fetchTransactions = (updateCallback) => {
    const transactionRef = ref(database, 'transactions');

    // Initial fetch of transactions
    onValue(transactionRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            const transactions = Object.keys(data).map((key) => ({ id: key, ...data[key] }));
            transactionsSnapshot = transactions; // Update local snapshot
            updateCallback(transactions); // Update transactions in real-time
        } else {
            transactionsSnapshot = [];
            updateCallback([]); // No transactions found
        }
    }, (error) => {
        console.error('Error fetching initial transactions:', error);
    });

    // Return a function to detach the listener when no longer needed
    return () => {
        // Detach the listener
        off(transactionRef, 'value');
    };
};

// Function to add a new transaction
const addTransaction = (transaction) => {
    return push(ref(database, 'transactions'), transaction)
        .then(() => {
            console.log('Transaction added successfully');
        })
        .catch((error) => {
            console.error('Error adding transaction:', error);
            throw error; // Propagate the error to the caller
        });
};

export { fetchTransactions, addTransaction, transactionsSnapshot };