import { getRandomInt, PET_HEIGHT, SCREEN_WIDTH } from "utils";
import useJump from "hooks/useJump";
import useMove from "hooks/useMove";
import TRex from './TRex';

const Pet = ({ user: { username, color }}) => {
  const startingPosition = getRandomInt(SCREEN_WIDTH - PET_HEIGHT);

  const [position, movingRef, direction] = useMove(startingPosition);
  const [height] = useJump(username, movingRef);

  return (
    <div style={{
      position: "absolute",
      bottom: height,
      left: position,
    }}>
      <p style={{
        fontWeight: "bolder",
        textShadow: [
          "3px 3px 0px #000",
          "-3px 3px 0px #000",
          "3px -3px 0px #000",
          "-3px -3px 0px #000"
        ],
      }}>
        {username}
      </p>
      <TRex color={color} direction={direction} />
    </div>
  );
}

export default Pet;