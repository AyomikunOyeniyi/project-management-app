import { useState } from "react";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [isAddBtnClicked, setIsAddBtnClicked] = useState(false);

  function handleAddProject() {
    setIsAddBtnClicked(true);
  }

  let content;

  if (isAddBtnClicked) {
    content = <NewProject></NewProject>
  } else {
    content = <NoProjectSelected onAddProject={handleAddProject}></NoProjectSelected>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onAddProject={handleAddProject}></Sidebar>
      {content}
    </main>
  );
}

export default App;
