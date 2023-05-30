import { Handle, Position } from 'reactflow';
import Border from '../components/Border';

function ExperienceNode({ data }) {
  const { darkMode, isConnectable, rowCount, colCount, col, row } = data;
  const isEvenRow = row % 2 === 0;
  const debug = false;

  const handlePositions = {
    left: Position.Left,
    right: Position.Right,
    top: Position.Top,
    bottom: Position.Bottom,
  };

  const leftType = isEvenRow ? 'target' : 'source';
  const rightType = isEvenRow ? 'source' : 'target';

  return (
    <Border
      className={`experience-node shadow-2xl ${
        darkMode ? 'bg-alt-dark' : 'bg-alt-light'
      }`}
    >
      <Handle
        type={leftType}
        id="left"
        position={handlePositions.left}
        isConnectable={isConnectable}
      />
      <Handle
        type={rightType}
        id="right"
        position={handlePositions.right}
        isConnectable={isConnectable}
      />

      <div className="flex flex-row items-center">
        <div
          className={`experience-date mx-auto mb-auto transform items-center justify-center ${
            darkMode ? 'bg-alt-light text-dark' : 'bg-alt-dark text-light'
          }`}
          key={data.index}
          style={{ writingMode: 'vertical-rl' }}
        >
          <h3 className="p-1">{data.date}</h3>
        </div>

        <div className="p-2">
          <h2
            className={`experience-position underline ${
              darkMode ? 'text-alt-light' : 'text-alt-dark'
            } font-bold pb-2`}
          >
            {data.position}
          </h2>
          <div className="flex flex-row experience-subtitle">
            <p
              className={`${
                darkMode ? 'text-alt-light' : 'text-alt-dark'
              } font-bold mr-2`}
            >
              {data.company}
            </p>
            <p className="font-extralight">{data.location}</p>
          </div>

          <br />

          <ul className="experience-description bullet-list">
            {data.description
              .split(/(\r?\n)|(\.\s)/)
              .filter((line) => line && line.trim() !== '.')
              .map((line, idx) => {
                return (
                  <li className="pl-2" key={idx}>
                    {line.replace('.', '') + '.'}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>

      <Handle
        type="source"
        id="bottom"
        position={Position.Bottom}
        isConnectable={isConnectable}
      />
      <Handle
        type="target"
        id="top"
        position={Position.Top}
        isConnectable={isConnectable}
      />

      {/* Debug Section */}
      {debug && (
        <div
          className={`${
            debug ? 'visible:false' : ''
          } pt-2 debug-section align-text-bottom text-sm`}
        >
          <p>{`c=${col} r=${row}`}</p>
          <p>{`left=${leftType} right=${rightType}`}</p>
        </div>
      )}
    </Border>
  );
}

export default ExperienceNode;
