/* eslint-disable react/prop-types */
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonWrapper = ({ width, height }) => (
  <SkeletonTheme baseColor="#8a4444" highlightColor="#e8cdcd">
    <Skeleton width={width} height={height} />
  </SkeletonTheme>
);
