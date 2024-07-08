import { useCallback, useState } from "react";
import { useProfileStore } from "../../shared/store";

// @ts-expect-error: remote app
import Form from "common/Form";
// @ts-expect-error: remote app
import Input from "common/Input";
// @ts-expect-error: remote app
import Button from "common/Button";

import { StyledButtonContainer, StyledProfileForm } from "./styles";

// TODO use react-hook-form
export const ProfileForm = () => {
  const profile = useProfileStore((state) => state.profile);
  const updateProfile = useProfileStore((state) => state.updateProfile);

  const [firstName, setFirstName] = useState(profile.firstName);
  const [lastName, setLastName] = useState(profile.lastName);

  const handleChangeFirstName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFirstName(e.target.value);
    },
    []
  );

  const handleChangeLastName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLastName(e.target.value);
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();

      updateProfile({ firstName, lastName });
    },
    [firstName, lastName, updateProfile]
  );

  return (
    <StyledProfileForm>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Enter first name"
          onChange={handleChangeFirstName}
          value={firstName}
        />
        <Input
          type="text"
          placeholder="Enter last name"
          onChange={handleChangeLastName}
          value={lastName}
        />
        <StyledButtonContainer>
          <Button>Save</Button>
        </StyledButtonContainer>
      </Form>
    </StyledProfileForm>
  );
};
