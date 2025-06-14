import "./index.css";

export const TableOverview = ({ data }: { data: string[] }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <table>
      <tr>
        <th className="empty-head-col" rowSpan={2} />
        {data.map((entry: string, index: number) => (
          <th key={`id-entry-${entry}-${index}`} className="col-letter-index">
            {letters[index]}
          </th>
        ))}
      </tr>
      <tr>
        {data.map((entry: string, index: number) => (
          <th key={`id-entry-${entry}-${index}`} className="col-header">
            {entry}
          </th>
        ))}
      </tr>
      <tr>
        <td>1</td>
        {data.map((_: string, index: number) => (
          <td key={`id-emptycol-1${index}`} className="empty-col">
            valor...
          </td>
        ))}
      </tr>
      <tr>
        <td>2</td>
        {data.map((_: string, index: number) => (
          <td key={`id-emptycol-1${index}`} className="empty-col">
            valor...
          </td>
        ))}
      </tr>
      <tr>
        <td>3</td>
        {data.map((_: string, index: number) => (
          <td key={`id-emptycol-1${index}`} className="empty-col">
            valor...
          </td>
        ))}
      </tr>
      <tr>
        <td>4</td>
        {data.map((_: string, index: number) => (
          <td key={`id-emptycol-1${index}`} className="empty-col">
            valor...
          </td>
        ))}
      </tr>
    </table>
  );
};
