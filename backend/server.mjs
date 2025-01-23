import express from 'express';
import cors from 'cors';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp, getDocs } from 'firebase/firestore';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

// Routes
app.post('/api/register', async (req, res) => {
  try {
    const participantData = {
      ...req.body,
      timestamp: serverTimestamp()
    };
    
    const docRef = await addDoc(collection(db, 'participants'), participantData);

    console.log(participantData);
    
    res.status(201).json({
      success: true,
      message: 'Registration successful',
      participantId: docRef.id
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      success: false,
      message: 'Registration failed',
      error: error.message
    });
  }
});

app.get('/api/participants', async (req, res) => {
  try {
    const participantsRef = collection(db, 'participants');
    const snapshot = await getDocs(participantsRef);
    
    const participants = [];
    snapshot.forEach(doc => {
      participants.push({ id: doc.id, ...doc.data() });
    });
    
    res.status(200).json({
      success: true,
      participants
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch participants',
      error: error.message
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
