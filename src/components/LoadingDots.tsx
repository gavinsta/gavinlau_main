//import "./styles.css";
import React from "react";
import { Box, keyframes, usePrefersReducedMotion } from "@chakra-ui/react";

export default function LoadingDots() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const animation1 = prefersReducedMotion
    ? undefined
    : `${keyframe_dot1} infinite 1s linear`;
  const animation2 = prefersReducedMotion
    ? undefined
    : `${keyframe_dot2} infinite 1s linear`;
  const animation3 = prefersReducedMotion
    ? undefined
    : `${keyframe_dot3} infinite 1s linear`;
  return (
    <Box>
      <Box style={{
        position: "relative",
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        backgroundColor: "#97144D",
        color: "#97144D",
        display: " inline-block",
        margin: "0 2px"
      }} animation={animation1} />
      <Box style={{
        position: "relative",
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        backgroundColor: "#97144D",
        color: "#97144D",
        display: " inline-block",
        margin: "0 2px"
      }} animation={animation2} />
      <Box style={{
        position: "relative",
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        backgroundColor: "#97144D",
        color: "#97144D",
        display: " inline-block",
        margin: "0 2px"
      }} animation={animation3} />
    </Box>
  );
}

const keyframe_dot1 = keyframes`
  0% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(1, 1.5);
  }
  50% {
    transform: scale(1, 0.67);
  }
  75% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
`;
const keyframe_dot2 = keyframes`
 0% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1, 1.5);
  }
  75% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
`;
const keyframe_dot3 = keyframes`
 0% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1, 0.67);
  }
  75% {
    transform: scale(1, 1.5);
  }
  100% {
    transform: scale(1, 1);
  }
`;