// @ts-expect-error: remote app
import Page from "common/Page";
// @ts-expect-error: remote app
import Content from "common/Content";

import { ProfileForm } from "../../widgets/ProfileForm";

export const ProfilePage = () => {
  return (
    <Page>
      <Content>
        <ProfileForm />
      </Content>
    </Page>
  );
};

export default ProfilePage;
