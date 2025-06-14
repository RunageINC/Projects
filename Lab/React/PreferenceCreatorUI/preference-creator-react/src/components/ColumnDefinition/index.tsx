import { useEffect, useState } from "react";

import "./index.css";
import { TableOverview } from "../TableOverview";

export const ColumnDefinition = () => {
  const [columnFields, setColumnFields] = useState<string>("");
  const [definitionMap, setDefinitionMap] = useState<string[]>([]);

  useEffect(() => {
    if (columnFields.length === 0) return;

    setDefinitionMap(columnFields.split(";"));
  }, [columnFields]);

  return (
    <div className="column-definitions-section">
      <label htmlFor="columnFields">
        Insira a ordem das colunas da planilha
      </label>
      <input
        type="text"
        id="columnFields"
        onChange={(e) => setColumnFields(e.target.value)}
      />

      <div className="column-definition-overview">
        {definitionMap.length > 0 && <TableOverview data={definitionMap} />}
      </div>
    </div>
  );
};
