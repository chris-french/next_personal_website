import { useEffect, useState } from 'react';

import Border from './Border';
import ReactFlow from 'reactflow';
import AboutNode from '../nodes/AboutNode';
import CustomEdge from '../CustomEdge';
import 'reactflow/dist/style.css';
import ImageComponent from '../components/ImageComponent';
import Banner from './Banner';

const proOptions = { hideAttribution: true };

export default function AboutPage({ aboutData, darkMode, context }) {
 
  const maxColumns = context.isMobile ? 1 : 2;

  const nodeTypes = {
    about: AboutNode,
    image: ImageComponent,
  };

  const edgeTypes = {
    custom: CustomEdge,
  };

  const min_x = 1;
  const max_x = 9;
  const min_y = 3;
  const max_y = 13;

  const columnWidth = context.windowDimensions.width / 12;
  const rowHeight = context.windowDimensions.height / 24;

  const aboutNodes = aboutData.about.map((item, index) => {
    let position;

    let sourceData = { type: 'source', position: null, id: null };
    let targetData = { type: 'target', position: null, id: null };

    switch (index) {
      case 0: // Introduction: Top Left
        position = { x: columnWidth * min_x, y: rowHeight * min_y };

        sourceData.position = 'right';
        break;
      case 1: // Full Stack Skills: Top Right
        position = { x: columnWidth * max_x, y: rowHeight * min_y };
        targetData.position = 'left';
        sourceData.position = 'bottom';
        break;
      case 2: // Academic Background: Bottom Right
        position = { x: columnWidth * max_x, y: rowHeight * max_y * 1.1 };
        targetData.position = 'top';
        sourceData.position = 'left';
        break;
      case 3: // Current Interests: Bottom Left
        position = { x: columnWidth * min_x, y: rowHeight  * max_y };
        targetData.position = 'right';
        break;
      default:
        throw new Error(`Invalid index: ${index}`);
    }

    return {
      id: `about_${index}`,
      type: 'about',
      position,
      data: {
        title: item.title,
        position: position,
        content: item.content,
        darkMode: darkMode,
        isConnectable: true,
        targetData: targetData,
        sourceData: sourceData,
        isMobile: context.isMobile
      },
    };
  });

  const imageComponentNode = {
    id: `logo`,
    type: 'image',
    position: { x: columnWidth * 5.5, y: rowHeight * 2 },
    data: {
      imagePath: 'media/chat_gpt_logo.jpg',
      darkMode: darkMode,
      borderRadius: context.isMobile ? 'rounded-sm' : 'rounded-2xl'
    }
  };

  const aboutEdges = [
    {
      id: 'e_about_0-1',
      type: 'custom',
      source: 'about_0',
      sourceHandle: 'right',
      target: 'about_1',
      targetHandle: 'left',
      animated: true,
      style: { stroke: '#f6ad55', strokeWidth: 3 },
    },
    {
      id: 'e_about_1-2',
      type: 'custom',
      source: 'about_1',
      sourceHandle: 'bottom',
      target: 'about_2',
      targetHandle: 'top',
      animated: true,
      style: { stroke: '#f6ad55', strokeWidth: 3 },
    },
    {
      id: 'e_about_2-3',
      type: 'custom',
      source: 'about_2',
      sourceHandle: 'left',
      target: 'about_3',
      targetHandle: 'right',
      animated: true,
      style: { stroke: '#f6ad55', strokeWidth: 3 },
    },
  ];

  {
    if (context.isMobile)
    {
      return (
        <div className='pt-2 pr-1 pl-1 pb-6 flex flex-col gap-1 w-full h-full overflow-y-auto'>
          <AboutNode {...aboutNodes[0]} />
          <ImageComponent {...imageComponentNode} />
          <AboutNode {...aboutNodes[1]} />
          <AboutNode {...aboutNodes[2]} />
          <AboutNode {...aboutNodes[3]} />
        </div>
      );
    }
    else
    {
      return (
        <Border className="flex flex-col w-full h-full">
          <Banner darkMode={darkMode} isMobile={context.isMobile}  />
          <ReactFlow
            className="w-full h-full"
            nodes={[
              imageComponentNode,
              ...aboutNodes,
            ]}
            edges={aboutEdges}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            fitView={true}
            zoomOnScroll={true}
            zoomOnPinch={true}
            proOptions={proOptions}
            style={{ background: darkMode ? 'alt-dark' : 'alt-light' }}
          />
        </Border>
      );
    }
  }
};
