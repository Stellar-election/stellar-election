import PageContainer from './components/PageContainer';
<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import { CreateElection } from './pages/CreateElection/CreateElection';
import { ReCheckInfo } from './pages/ElectionInfo/ReCheckInfo';
import { Home } from './pages/Home/Home';
import { CreateResult } from './pages/CreateResult/CreateResult';
import { ShowResult } from './pages/ShowResult/ShowResult';
import { Area } from './pages/Area/Area';
import { Vote } from './pages/Vote/Vote';
import { DoneVote } from './pages/DoneVote/DoneVote';
=======
import {Route, Routes} from "react-router-dom";
import {CreateElection} from './pages/CreateElection/CreateElection';
import {Home} from './pages/Home/Home';
import {ShowResult} from './pages/ShowResult/ShowResult';
>>>>>>> 05c4f381a2cde3fb85b6ad5dcdb79fe38b1f5b63
import './App.css';
import VoteProvider from "./store/voteStore";

export default function App() {
<<<<<<< HEAD
  return (
    <PageContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateElection />} />
        <Route path="/result" element={<ShowResult/>} />
        <Route path="/area" element={<Area/>} />
        <Route path="/vote" element={<Vote/>} />
        <Route path="/showresult" element={<ShowResult/>} />
        <Route path="/donevote" element={<DoneVote/>} />
      </Routes>

    </PageContainer>
  );
=======
    return (
        <PageContainer>
            <VoteProvider>
                <Routes>

                    <Route exact path="/" element={<Home/>}/>

                    <Route path="/create" element={<CreateElection/>}/>
                    <Route path="/result" element={<ShowResult/>}/>
                </Routes>
            </VoteProvider>
        </PageContainer>
    );
>>>>>>> 05c4f381a2cde3fb85b6ad5dcdb79fe38b1f5b63
}