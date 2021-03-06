import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiCamera } from 'react-icons/fi';
import './styles.css';

interface DropzoneProps {
  onFileUploaded: (file: File) => void;
  name: string;
}

const Dropzone: React.FC<DropzoneProps> = ({
  onFileUploaded,
  name,
}: DropzoneProps) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState('');

  const onDrop = useCallback(
    acceptedFiles => {
      const file = acceptedFiles[0];

      const fileUrl = URL.createObjectURL(file);

      setSelectedFileUrl(fileUrl);
      onFileUploaded(file);
    },
    [onFileUploaded],
  );
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />

      {selectedFileUrl ? (
        <img src={selectedFileUrl} alt="Point thumbnail" />
      ) : (
        <p>
          <FiCamera />
          Foto do {name}
        </p>
      )}
    </div>
  );
};

export default Dropzone;
