import { Editor } from "./editor";

interface IDocumentsIdProps {
  params: Promise<{ documentsId: string }>;
}

const DocumentsId = async ({ params }: IDocumentsIdProps) => {
  const { documentsId } = await params;
  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      {documentsId}
      <Editor />
    </div>
  );
};

export default DocumentsId;
