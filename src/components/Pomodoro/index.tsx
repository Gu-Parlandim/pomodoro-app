import { CloseOutlined, SettingFilled } from "@ant-design/icons";
import * as S from "./styles";
import { useState } from "react";

const PomodoroSettings = () => {
  const [timeMin, setTimeMin] = useState(25);
  const [timeSec, setTimeSec] = useState("00");

  const handleTimeMin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimeMin(Number(event.target.value));
  };

  const handleTimeSec = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimeSec(event.target.value);
  };

  return (
    <S.Container>
      <S.Header>
        <S.ButtonsHeader>
          <SettingFilled style={{ fontSize: "19px" }} />
        </S.ButtonsHeader>

        <S.Title>Pomodoro</S.Title>

        <S.ButtonsHeader>
          <CloseOutlined style={{ fontSize: "19px" }} />
        </S.ButtonsHeader>
      </S.Header>

      <S.Body>
        <S.Input
          type="number"
          min="0"
          value={timeMin}
          onChange={handleTimeMin}
        />
        <S.Separator />
        <S.Input
          type="number"
          min="0"
          value={timeSec}
          onChange={handleTimeSec}
        />
      </S.Body>

      <S.ButtonInit type="button">Iniciar</S.ButtonInit>
    </S.Container>
  );
};

export default PomodoroSettings;
