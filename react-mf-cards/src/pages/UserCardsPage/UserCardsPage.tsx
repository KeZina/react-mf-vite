// @ts-expect-error: remote app
import Page from "common/Page";
// @ts-expect-error: remote app
import Content from "common/Content";
// @ts-expect-error: remote app
import PageTitle from "common/PageTitle";
// @ts-expect-error: remote app
import useProfileStore from "profile/useProfileStore";

import { UserCardsList } from "../../widgets/UserCardsList";

export const UserCardsPage = () => {
  const profile: any = useProfileStore((state: any) => state.profile);

  return (
    <Page>
      <Content>
        <PageTitle>
          Hi {profile.firstName} {profile.lastName}! Here's your cards
        </PageTitle>
        <UserCardsList />
      </Content>
    </Page>
  );
};

export default UserCardsPage;
