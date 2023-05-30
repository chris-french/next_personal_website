import { Handle, Position } from 'reactflow';
import Border from '../components/Border';

function LabelNode({ data }) {
  const { label, darkMode, isConnectable, handleOptions } = data;

  return (
    <Border
      className={`shadow-2xl label-node p-4 ${
        darkMode ? 'bg-alt-dark' : 'bg-alt-light'
      }`}
    >
      {handleOptions && (
        <>
          {handleOptions.left && (
            <Handle
              type={handleOptions.left}
              id="left_handle"
              position={Position.Left}
              isConnectable={isConnectable}
            />
          )}
          {handleOptions.right && (
            <Handle
              type={handleOptions.right}
              id="right_handle"
              position={Position.Right}
              isConnectable={isConnectable}
            />
          )}
          {handleOptions.top && (
            <Handle
              type={handleOptions.top}
              id="top_handle"
              position={Position.Top}
              isConnectable={isConnectable}
            />
          )}
          {handleOptions.bottom && (
            <Handle
              type={handleOptions.bottom}
              id="bottom_handle"
              position={Position.Bottom}
              isConnectable={isConnectable}
            />
          )}
        </>
      )}
      <div className={`h-[40px] p-5`}>
        <h1
          className={`${
            darkMode ? 'text-off-light' : 'text-off-dark'
          } font-bold`}
        >
          {label}
        </h1>
      </div>
    </Border>
  );
}

export default LabelNode;
