import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Layout from "../components/common/Layout";
import EditProjectForm from "../components/project/EditProjectForm";

function EditProject() {
  const { id } = useParams();

  const [project, setProject] = useState(null);

  useEffect(() => {
    const projects = JSON.parse(localStorage.getItem("projects")) || [];

    const selectedProject = projects.find((item) => item.id === Number(id));

    setProject(selectedProject);
  }, [id]);

  if (!project) {
    return (
      <Layout>
        <h2>Project Not Found</h2>
      </Layout>
    );
  }

  return (
    <Layout>
      <EditProjectForm project={project} />
    </Layout>
  );
}

export default EditProject;
