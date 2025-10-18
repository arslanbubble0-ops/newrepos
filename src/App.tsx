import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Payers from './pages/Payers';
import AddPayer from './pages/AddPayer';
import Recipients from './pages/Recipients';
import FormsSummary from './pages/FormsSummary';
import EFileMail from './pages/EFileMail';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/payers" />} />
          <Route path="/payers" element={<Payers />} />
          <Route path="/payers/add" element={<AddPayer />} />
          <Route path="/recipients" element={<Recipients />} />
          <Route path="/forms-summary" element={<FormsSummary />} />
          <Route path="/efile-mail" element={<EFileMail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
