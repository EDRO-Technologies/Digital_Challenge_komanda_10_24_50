import { useGetUserSkills } from "@entities/user";

import { useDeleteSkillMutation } from "../api/hooks/useDeleteSkillMutation";
import { usePostCreateSkillMutation } from "../api/hooks/usePostCreateSkillMutation";

export const useSkills = () => {
  const addSkillMutation = usePostCreateSkillMutation();
  const deleteSkillMutation = useDeleteSkillMutation();
  const skillData = useGetUserSkills({});

  const deleteSkill = async (skillUid: string) =>
    await deleteSkillMutation.mutateAsync({
      uid: skillUid
    });

  const addSkill = async (skillUid: string, clearSearchValue?: () => void) => {
    await addSkillMutation.mutateAsync({
      params: {
        skillUid,
        level: "null"
      }
    });

    if (clearSearchValue) clearSearchValue();
  };

  return { deleteSkill, addSkill, ...skillData };
};
