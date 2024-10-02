import { Route, Routes } from 'react-router-dom';

import HomePage from '@/pages/home/HomePage';
import StudyRooms from '@/pages/study-room/StudyRooms';
import LoginPage from '@/pages/login/LoginPage';
import SignUpPage from '@/pages/signUp/SignUpPage';
import ProfilePage from '@/pages/profile/ProfilePage';
import Planner from '@/pages/planner/Planner';
import PrivateStudyRoom from '@/pages/privateStudyRoom/PrivateStudyRoom';
import MultiStudyRoom from '@/pages/multiStudyRoom/MultiStudyRoom';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/planner" element={<Planner />} />
      <Route path="/study-rooms" element={<StudyRooms />} />
      <Route path="/study-room" element={<PrivateStudyRoom />} />
      <Route path="/multi-study-room" element={<MultiStudyRoom />} />
    </Routes>
  );
}
