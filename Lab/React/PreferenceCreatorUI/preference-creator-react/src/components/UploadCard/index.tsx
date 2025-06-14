import { useState } from "react";

import { Upload } from "phosphor-react";

import "./index.css";

export const UploadCard = () => {
  const [loading, isLoading] = useState<boolean>();

  return (
    <div className="upload-card">
      <Upload size={64} />
      <span>Faça o upload do arquivo clicando aqui</span>
    </div>
  );
};
