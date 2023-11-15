interface ITitleAndSubProps {
  content: React.ReactNode;
  subContent: React.ReactNode;
  type: "h1" | "h2";
  TypeLineColor: "primary" | "secondary";
}

export default function TitleAndSub({
  content,
  type,
  subContent,
  TypeLineColor,
}: ITitleAndSubProps) {
  const titleOrSub = {
    h1: <h1>{content} </h1>,
    h2: <h2>{content} </h2>,
  };

  const lineColor = {
    primary: "primary",
    secondary: "secondary",
  };

  return (
    <div>
      <h6> {subContent} </h6>
      <hr className={`border-t-${lineColor[TypeLineColor]}  `} />
      {titleOrSub[type]}
    </div>
  );
}
