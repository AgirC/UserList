import React from "react";
import { MantineProv } from "./providers/mantine";
import { RecoilProvider } from "./providers/recoil";
import { ReactQueryProvider } from "./providers/react-query";
import UserList from "./components/user-list/user-list";

function App() {
  return (
    <MantineProv>
      <RecoilProvider>
        <ReactQueryProvider>
          <div className="App">
            <UserList />
          </div>
        </ReactQueryProvider>
      </RecoilProvider>
    </MantineProv>
  );
}

export default App;
