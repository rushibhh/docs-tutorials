import { Editor } from "./editor";
import { Toolbar } from "./toolbar";

interface IDocumentsIdProps {
  params: Promise<{ documentsId: string }>;
}

const DocumentsId = async ({ params }: IDocumentsIdProps) => {
  // TODO: Just add log to ignore type warning
  console.log(params);
  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <Toolbar />
      <Editor />
    </div>
  );
};

export default DocumentsId;
