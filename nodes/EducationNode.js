import { Handle, Position } from 'reactflow';
import Border from '../components/Border';

function EducationNode({ data }) {
  const { darkMode, isConnectable, index } = data;
  return (
    <Border
      className={`education-node shadow-2xl ${
        darkMode ? 'bg-alt-dark' : 'bg-alt-light'
      }`}
    >
      <Handle
        type="target"
        id="left"
        position={Position.Left}
        isConnectable={isConnectable}
      />
      <div
        className={`flex flex-col p-4 ${
          darkMode ? 'bg-alt-dark' : 'bg-alt-light'
        }`}
      >
        <div className="pt-2 flex flex-row">
          <div
            className={`p-1 mx-auto mb-auto ${
              darkMode ? 'bg-alt-light text-dark' : 'bg-alt-dark text-light'
            }`}
            style={{ writingMode: 'vertical-rl' }}
          >
            <p>{data.date}</p>
          </div>
          <div className="p-2">
            <h2
              className={`${
                darkMode ? 'text-alt-light' : 'text-alt-dark'
              } underline font-bold`}
            >
              {data.institution}
            </h2>

            <h3
              className={`pt-2 ${
                darkMode ? 'text-alt-light' : 'text-alt-dark'
              } font-bold`}
            >
              {data.degree}
            </h3>

            {data.notes && <p className="pt-2">{data.notes}</p>}
          </div>
        </div>
      </div>
      <Handle
        type="source"
        id="right"
        position={Position.Right}
        isConnectable={isConnectable}
      />
    </Border>
  );
}

export default EducationNode;
