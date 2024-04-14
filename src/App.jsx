import { useState } from "react";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [isAddBtnClicked, setIsAddBtnClicked] = useState(false);
  const [projects, setProjects] = useState([]);

  function handleStartAddProject() {
    setIsAddBtnClicked(true);
  }

  function handleAddProject(projectData) {
    const newProject = {
      ...projectData,
      id: Math.random()
    };

    
    const prevProjects = [...projects];
    setProjects(() => [...prevProjects, newProject]);
    setIsAddBtnClicked(false);
  }

  
  let content;

  if (isAddBtnClicked) {
    content = <NewProject onAdd={handleAddProject}></NewProject>
  } else {
    content = <NoProjectSelected onAddProject={handleStartAddProject}></NoProjectSelected>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onAddProject={handleStartAddProject} projects = {projects}></Sidebar>
      {content}
    </main>
  );
}

export default App;
