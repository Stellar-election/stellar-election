import PageContainer from './components/PageContainer';
import { Routes, Route } from "react-router-dom";
import { CreateElection } from './pages/CreateElection/CreateElection';
import { Home } from './pages/Home/Home';
import './App.css';

export default function App() {
  return (
    <PageContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create/election" element={<CreateElection />} />
      </Routes>
    </PageContainer>
  );
}