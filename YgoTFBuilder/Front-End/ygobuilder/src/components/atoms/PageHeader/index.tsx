import "./index.css";

export const PageHeader = ({
  title,
  description,
}: {
  title: string;
  description: string | null;
}) => (
  <div className="page-header">
    <h1>{title}</h1>
    <span>{description}</span>
  </div>
);
