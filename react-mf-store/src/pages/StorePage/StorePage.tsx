// @ts-expect-error: remote app
import Page from "common/Page";
// @ts-expect-error: remote app
import Content from "common/Content";
// @ts-expect-error: remote app
import PageTitle from "common/PageTitle";
// @ts-expect-error: remote app
import useProfileStore from "profile/useProfileStore";

import { StoreList } from "../../widgets/StoreList";

export const StorePage = () => {
  const profile: any = useProfileStore((state: any) => state.profile);
  console.log(2);
  return (
    <Page>
      <Content>
        <PageTitle>
          Hi {profile.firstName} {profile.lastName}!
        </PageTitle>
        <StoreList />
      </Content>
    </Page>
  );
};

export default StorePage;
