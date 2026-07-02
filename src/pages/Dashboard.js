import { Grid } from "@mui/material";

import FolderIcon from "@mui/icons-material/Folder";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import GroupsIcon from "@mui/icons-material/Groups";

import Layout from "../components/common/Layout";
import SummaryCard from "../components/dashboard/SummaryCard";
import CategoryChart from "../components/dashboard/CategoryChart";
function Dashboard() {
  return (
    <Layout>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <SummaryCard
            title="Total Projects"
            value={25}
            icon={<FolderIcon />}
            color="#8E44AD"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <SummaryCard
            title="Completed"
            value={18}
            icon={<CheckCircleIcon />}
            color="#4CAF50"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <SummaryCard
            title="Pending"
            value={7}
            icon={<PendingActionsIcon />}
            color="#FF9800"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <SummaryCard
            title="Team Members"
            value={12}
            icon={<GroupsIcon />}
            color="#2196F3"
          />
        </Grid>
      </Grid>

      <CategoryChart />
    </Layout>
  );
}

export default Dashboard;
