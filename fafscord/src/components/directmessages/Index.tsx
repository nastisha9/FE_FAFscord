import React from "react";

import * as S from "./Styles";

import ControllerIcon from "../../assets/gamepad-controller.png";
import FriendsIcon from "../../assets/friends.png";
import MicrophoneIcon from "../../assets/microphone-black-shape.svg";
import HeadphoneIcon from "../../assets/headphone-symbol.svg";
import SettingsIcon from "../../assets/settings-work-tool.svg";

import { ESections } from "../lobbysection/Index";
import Label from "../label/Index";
import Icon from "../icon/Index";
import SettingsContainer from "../settingscontainer/Index";

export default function DirectMessages({ setCurrentSection }): JSX.Element {

  return (
    <S.Section>
      <S.SearchBar placeholder="Find or start a conversation" />
      <S.Container onClick={() => setCurrentSection(ESections.ACTIVITY)}>
        <Icon src={ControllerIcon} />
        <Label>Activity</Label>
      </S.Container>
      <S.Container onClick={() => setCurrentSection(ESections.FRIENDS)}>
        <Icon src={FriendsIcon} />
        <Label>Friends</Label>
      </S.Container>

      <S.Message>Direct Messages</S.Message>

      <SettingsContainer>

        <Icon
          src={MicrophoneIcon}
          style={{ marginRight: "5px", cursor: "pointer" }}
        />
        <Icon
          src={HeadphoneIcon}
          style={{ marginRight: "5px", cursor: "pointer" }}
        />
        <Icon
          src={SettingsIcon}
          style={{ cursor: "pointer" }}
          onClick={(): void => setCurrentSection(ESections.SETTINGS)}
        />
      </SettingsContainer>
    </S.Section>
  );
}
