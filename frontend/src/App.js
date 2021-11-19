import PageContainer from './components/PageContainer';
import {Route, Routes} from "react-router-dom";
import {CreateElection} from './pages/CreateElection/CreateElection';
import {Home} from './pages/Home/Home';
import {ShowResult} from './pages/ShowResult/ShowResult';
import './App.css';
import VoteProvider from "./store/voteStore";

export default function App() {
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
}