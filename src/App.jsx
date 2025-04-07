import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./components/Body";
import { Toaster } from 'react-hot-toast';
import FeedbackForm from "./pages/FeedbackForm";
import FeedbackList from "./pages/FeedbackList";

function App() {
  return(
    <>
      <BrowserRouter basename="/">
        <Routes>

          <Route path="/" element={<Body />}>

            <Route path="/" element={<FeedbackForm />} />
            <Route path="/feedback-list" element={<FeedbackList />} />

          </Route>

        </Routes>
        <Toaster position="top-center"/>
      </BrowserRouter>
    </>
  );
}

export default App
