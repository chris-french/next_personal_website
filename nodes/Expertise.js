import { Handle, Position } from 'reactflow';
import Border from '../components/Border';
function ExpertiseNode({ data }) {
  const { label, darkMode, isConnectable } = data;

  return (
    <Border
      className={`${
        darkMode ? 'bg-alt-dark' : 'bg-alt-light'
      } expertise-node p-2`}
    >
      <Handle
        type="target"
        id={`target-${label}`}
        position={Position.Left}
        isConnectable={isConnectable}
      />
      <div className={` p-5`}>
        <h3
          className={`${
            darkMode ? 'text-alt-light' : 'text-alt-dark'
          } underline font-bold`}
        >
          {label}
        </h3>
      </div>
      <Handle
        type="source"
        id={`source-${label}`}
        position={Position.Right}
        isConnectable={isConnectable}
      />
    </Border>
  );
}

export default ExpertiseNode;
