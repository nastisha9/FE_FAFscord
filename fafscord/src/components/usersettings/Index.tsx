import React, { useState } from "react";
import * as S from "./Styles";
import ChestImage from "../../assets/chest.svg";
import { ESections } from "../lobbysection/Index";
import Avatar from "../avatar/Index";
import Button from "../button/Index";
import { Input } from "../form/Index";

export default function UserSettings({ setCurrentSection }): JSX.Element {
  const [editButtonClicked, setEditButtonClicked] = useState(false);
  const [state, setState] = useState({} as any);

  const cancelUpdate = (): void => {
    setState({});
    setEditButtonClicked(false);
  };

  return (
    <S.Container>
      <S.FlexContainer
        style={{
          width: "200px",
          flexDirection: "column",
          height: "100%",
          background: "#2f3136"
        }}
      >
        <S.Title>User Settings</S.Title>
        <Button
          style={{
            background: "transparent",
            color: "#696d74",
            textAlign: "left"
          }}
        >
          My Account
        </Button>
        <Button
          style={{
            background: "transparent",
            color: "#696d74",
            textAlign: "left"
          }}
        >
          Privacy & Safety
        </Button>
        <Button
          style={{
            background: "transparent",
            color: "#696d74",
            textAlign: "left"
          }}
        >
          Connections
        </Button>
        <S.Title>App Settings</S.Title>
        <Button
          style={{
            background: "transparent",
            color: "#696d74",
            textAlign: "left"
          }}
        >
          Voice & Video
        </Button>
        <Button
          style={{
            background: "transparent",
            color: "#696d74",
            textAlign: "left"
          }}
        >
          Notifications
        </Button>
        <Button
          style={{
            background: "transparent",
            color: "#696d74",
            textAlign: "left"
          }}
        >
          Activity Feed
        </Button>
        <Button
          style={{
            background: "transparent",
            color: "#696d74",
            textAlign: "left"
          }}
        >
          Text & Images
        </Button>
        <Button
          style={{
            background: "transparent",
            color: "#696d74",
            textAlign: "left"
          }}
        >
          Appereance
        </Button>
        <Button
          style={{
            background: "transparent",
            color: "#696d74",
            textAlign: "left"
          }}
        >
          Language
        </Button>
        <Button
          style={{
            background: "transparent",
            color: "#696d74",
            textAlign: "left"
          }}
        >
          Change Log
        </Button>
        <Button
          style={{
            color: "#C34142",
            background: "transparent",
            textAlign: "left"
          }}
        >
          Log Out
        </Button>
        <S.FlexContainer
          style={{
            justifyContent: "flex-start",
            height: "20px",
            padding: "20px 0px"
          }}
        >
        </S.FlexContainer>
      </S.FlexContainer>

      <S.RightContainer>
        <S.FlexContainer style={{ justifyContent: "space-between" }}>
          <S.BigTitle>
            My Account{" "}
            <span
              style={{ marginLeft: "10px", fontSize: "12px", color: "#5A5C60" }}
            >
            </span>
          </S.BigTitle>
          <S.XButton onClick={(): void => setCurrentSection(ESections.FRIENDS)}>
            X
          </S.XButton>
        </S.FlexContainer>

        <S.FlexContainer
          style={{
            background: "#292B2F",
            width: "90%",
            border: "1px solid #202225",
            borderRadius: "5px",
            height: editButtonClicked ? "400px" : "150px",
            alignItems: "center"
          }}
        >
          <Avatar
            src={ChestImage}
            style={{
              width: "70px",
              marginLeft: "30px",
              marginTop: editButtonClicked ? "-200px" : "0px"
            }}
          />
          {editButtonClicked ? (
            <>
              <S.FlexContainer
                style={{
                  flexDirection: "column",
                  width: "80%"
                }}
              >
                <S.Title style={{ marginBottom: "5px" }}>USERNAME</S.Title>
                <Input
                  onChange={(e) =>
                    setState({ ...state, username: e.target.value })
                  }
                />

                <S.Title style={{ marginBottom: "5px" }}>EMAIL</S.Title>
                <Input
                  type="email"
                  onChange={(e) =>
                    setState({ ...state, email: e.target.value })
                  }
                />

                <S.Title style={{ marginBottom: "5px" }}>PASSWORD</S.Title>
                <Input
                  type="password"
                  onChange={(e: any): void =>
                    setState({ ...state, password: e.target.value })
                  }
                />

                <S.FlexContainer
                  style={{
                    flexDirection: "row",
                    marginTop: "15%",
                    width: "100%"
                  }}
                >
                  <Button
                    style={{
                      background: "transparent",
                      border: "1px solid #C34142",
                      color: "#C34142"
                    }}
                  >
                    Delete Account
                  </Button>
                  <Button
                    style={{
                      background: "transparent",
                      border: "1px solid #C34142",
                      color: "#C34142",
                      marginRight: "100px",
                      marginLeft: "10px"
                    }}
                  >
                    Disable Account
                  </Button>
                  <Button
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#fff",
                      height: "35px"
                    }}
                    onClick={cancelUpdate}
                  >
                    Cancel
                  </Button>
                  <Button
                    style={{ background: "#43B581", height: "35px" }}
                  >
                    Save
                  </Button>
                </S.FlexContainer>
              </S.FlexContainer>
            </>
          ) : (
            <>
              <S.FlexContainer
                style={{ flexDirection: "column", marginLeft: "30px" }}
              >
                <S.Title style={{ marginBottom: "0px" }}>USERNAME</S.Title>
                <S.P>
                  <span style={{ color: "#5A5C60", fontSize: "12px" }}>
                    #3450
                  </span>
                </S.P>

                <S.Title style={{ marginBottom: "0px" }}>EMAIL</S.Title>
              </S.FlexContainer>
              <Button
                style={{
                  marginBottom: "55px",
                  marginRight: "20px",
                  width: "100px",
                  height: "40px",
                  background: "#7289da"
                }}
                onClick={(): void => setEditButtonClicked(true)}
              >
                Edit
              </Button>
            </>
          )}
        </S.FlexContainer>
      </S.RightContainer>
    </S.Container>
  );
}
