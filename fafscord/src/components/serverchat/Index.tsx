import React, { useState } from "react";
import { ReactMic } from "react-mic";
import * as S from "./Styles";
import ErrorMessage from "../errormessage/Index";
import Avatar from "../avatar/Index";

export default function ServerChat(): JSX.Element {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState([] as any);

  const [tooManyMessages, setTooManyMessages] = useState(false);


  return (
    <S.ContentSection>
      <div style={{ width: "0px", height: "0px", marginTop: "-2000px" }}>
        <ReactMic
          className="sound-wave"
          strokeColor="#000000"
          backgroundColor="#FF4081"
        />
      </div>
      <S.Container>
        {messages.length > 0 &&
          messages.map((message: any): any => (
            <S.MessageContainer key={Math.random()}>
              <S.AvatarContainer>
                <Avatar src={message.author.avatar} />
              </S.AvatarContainer>
              <S.Message>{message.content}</S.Message>
            </S.MessageContainer>
          ))}

        {tooManyMessages && (
          <ErrorMessage message="You're sending too many messages" />
        )}
          <S.Input
            placeholder="type here"
            onChange={(e: any): void => setCurrentMessage(e.target.value)}
            value={currentMessage}
          />
      </S.Container>
    </S.ContentSection>
  );
}
