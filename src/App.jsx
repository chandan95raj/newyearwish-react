import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WishInput from "./components/WishInput";
import WishDisplay from "./components/WishDisplay";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<WishInput />} />
          {/* Update this route to expect two parameters */}
          <Route path="/wish/:senderName/:recipientName" element={<WishDisplay />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
