import { api } from "@shared/api";

interface ICreateSkill {
  name: string;
}

export type TPostCreateSkillConfig = TRequestConfig<ICreateSkill>;

export const postCreateSkill = ({ params, config }: TPostCreateSkillConfig) =>
  api.post("/user/profile-skills", params, config);