import { Handle, Position } from 'reactflow';
import Border from '../components/Border';

function SummaryNode({ data }) {
  const { summary, isConnectable, darkMode } = data;

  return (
    <Border
      className={`shadow-2xl summary-node ${
        darkMode ? 'bg-alt-dark' : 'bg-alt-light'
      } p-4`}
    >
      <Handle
        type="target"
        id="summary_to_title"
        position={Position.Left}
        isConnectable={isConnectable}
      />
      <h2
        className={`${
          darkMode ? 'text-off-light' : 'text-off-dark'
        } underline font-bold`}
      >
        Summary
      </h2>
      <p
        className={`${
          darkMode ? 'text-alt-light' : 'text-alt-dark'
        } max-w-[200px] overflow-hidden whitespace-nowrap overflow-ellipsis`}
      >
        {summary}
      </p>
    </Border>
  );
}

export default SummaryNode;
