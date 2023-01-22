import React, { useState } from "react";
import * as S from "./Styles";
import CreateServerImage from "../../assets/plus.png";
import { EViews } from "../../pages/lobby/Index";
import Avatar from "../avatar/Index";

export default function LeftSideNavbar({ setCurrentView }): JSX.Element {
  const [state, setState] = useState({
    joiningServer: false,
    componentsOnView: {
      createServerCard: false
    }
  });

  return (
    <>
      <S.Nav>
        <Avatar
          src={CreateServerImage}
          onClick={(): void =>
            setState({ ...state, componentsOnView: { createServerCard: true } })
          }
        />

      </S.Nav>
    </>
  );
}
