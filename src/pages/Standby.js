import React from "react";
import { Link } from 'react-router-dom'
import BoutonNormal from '../components/BoutonComp'
import InterSectionBox from '../components/InterSectionBox'
import backInterOld from '../assets/img/svg/oldSchool/paternOldSchool.svg';
import Footer from '../components/Footer';
function Standby() {
  return (
    <>
      <section className="sect sect__attente pageChangeSet">
        <h1 className="sect__title">Le contenut arrive bientôt . </h1>

        <BoutonNormal
          linkBtn={"/"}
          nameBtn={"Retour à la carte "}
          ClassColor={"sect__btn sect__btn--yellow"}
        />
      </section>
      <InterSectionBox
        backImg={{ backgroundImage: `url(${backInterOld})`, height: "20vh" }}
      />
      <Footer />
    </>
  );
}

export default Standby;
