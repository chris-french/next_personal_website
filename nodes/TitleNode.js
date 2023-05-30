import { Handle, Position } from 'reactflow';
import Border from '../components/Border';
function TitleNode({ data }) {
  const { label, darkMode, isConnectable } = data;

  return (
    <Border
      className={`shadow-2xl title-node p-4  ${
        darkMode ? 'bg-alt-dark' : 'bg-alt-light'
      }`}
    >
      <Handle
        type="source"
        id="title_to_summary"
        position={Position.Right}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        id="title_to_expertise"
        position={Position.Bottom}
        isConnectable={isConnectable}
      />
      <div className={` h-[40px] p-5`}>
        <h1
          className={`${
            darkMode ? 'text-alt-light' : 'text-alt-dark'
          } underline font-bold`}
        >
          {label}
        </h1>
      </div>
    </Border>
  );
}

export default TitleNode;
