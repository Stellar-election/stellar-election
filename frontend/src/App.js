import PageContainer from './components/PageContainer';
import { Routes, Route } from "react-router-dom";
import { CreateElection } from './pages/CreateElection/CreateElection';
import { ReCheckInfo } from './pages/ElectionInfo/ReCheckInfo';
import { Home } from './pages/Home/Home';
import { CreateResult } from './pages/CreateResult/CreateResult';
import { ShowResult } from './pages/ShowResult/ShowResult';
import { Area } from './pages/Area/Area';
import { Vote } from './pages/Vote/Vote';
import { DoneVote } from './pages/DoneVote/DoneVote';
import './App.css';

export default function App() {
  return (
    <PageContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateElection />} />
        <Route path="/result" element={<ShowResult/>} />
        <Route path="/area" element={<Area/>} />
        <Route path="/vote" element={<Vote/>} />
        <Route path="/showresult" element={<ShowResult/>} />
        <Route path="/donwvote" element={<DoneVote/>} />
      </Routes>

    </PageContainer>
  );
}