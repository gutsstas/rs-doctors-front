import Divider from "@mui/material/Divider";
import { SectionBenefits } from "../../components/SectionBenefits/SectionBenefits";
import { SectionFindDoctors } from "../../components/SectionFindDoctors/SectionFindDoctors";
import { SectionTeam } from "../../components/SectionTeam/SectionTeam";
import style from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <SectionFindDoctors />
      <Divider className={style.divider}>Benefits</Divider>
      <SectionBenefits />
      <Divider className={style.divider}>Our Team</Divider>
      <SectionTeam />
    </>
  );
};

export { Home };
