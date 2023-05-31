import { Handle } from 'reactflow';
import classNames from 'classnames';
import Border from '../components/Border';

const AboutNode = ({ data }) => {
  return (
    <Border
      style={{maxWidth: data.isMobile ? 'none' : '600px'}}
      className={classNames(
        'about-node p-4  shadow-2xl',
        {
          'bg-off-dark text-alt-light': data.darkMode,
          'bg-off-light text-alt-dark': !data.darkMode,
        },
        {
            'w-full rounded-sm': data.isMobile,
            'w-[400px] rounded-2xl': !data.isMobile
        }
      )}
    >
      {!data.isMobile && data.sourceData.position != null && (
        <Handle
          type={data.sourceData.type}
          id={data.sourceData.position}
          position={data.sourceData.position}
          style={{ background: '#f6ad55' }}
        />
      )}
      <div className="p-2">
        <h2 className="about-title font-semibold mb-4 underline">
          {data.title}
        </h2>
        <p className="about-text">{data.content}</p>
      </div>

      {!data.isMobile && data.targetData.position != null && (
        <Handle
          type={data.targetData.type}
          position={data.targetData.position}
          id={data.targetData.position}
          style={{ background: '#f6ad55' }}
        />
      )}
    </Border>
  );
};

export default AboutNode;
