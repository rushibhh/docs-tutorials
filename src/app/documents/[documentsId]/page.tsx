import { Editor } from "./editor";

interface IDocumentsIdProps {
  params: Promise<{ documentsId: string }>;
}

const DocumentsId = async ({ params }: IDocumentsIdProps) => {
  const { documentsId } = await params;
  return (
    <div>
      {documentsId}
      <Editor />
    </div>
  );
};

export default DocumentsId;
