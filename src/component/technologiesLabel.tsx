import React from "react";

interface IProps {
  technologie: string;
}

export function TecnologiesCard(props: IProps) {
  const { technologie } = props;
  return (
    <div className="flex items-center rounded-full bg-teal-800/10 px-3 py-1 text-xs font-medium leading-5 text-teal-500 mr-1 my-1">{technologie}</div>
  );
}
