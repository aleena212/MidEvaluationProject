import { Typography } from "@mui/material";

import Layout from "../components/common/Layout";
import ProfileCard from "../components/profile/ProfileCard";
import PersonalInfo from "../components/profile/PersonalInfo";

function Profile() {
  return (
    <Layout>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        My Profile
      </Typography>

      <ProfileCard />

      <PersonalInfo />
    </Layout>
  );
}

export default Profile;
