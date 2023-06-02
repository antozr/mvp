import React from "react";

function CardInfoStyle({urlImg, nameBook, author}) {
  return (
    <>
      <el className="stylePage__elBox">
        <img
          src={urlImg}
          alt="Couverture de livre ayant pour sujet les tatouages."
          className="stylePage__imgBox"
        />
        <h3 className="sect__title sect__title--3">
          {nameBook}
        </h3>
        <p className="sect__txt sect__txt--thin">
          {author}
        </p>
        {/* <p className="sect__txt sect__txt--jaune">
                  {dataStyle[0].name}
                </p> */}
      </el>
    </>
  );
}

export default CardInfoStyle;
