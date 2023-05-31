import { useEffect, useState } from 'react';

import Border from './Border';
import ReactFlow from 'reactflow';
import TitleNode from '../nodes/TitleNode';
import SummaryNode from '../nodes/Summary';
import ExperienceNode from '../nodes/ExperienceNode';
import EducationNode from '../nodes/EducationNode';
import ExpertiseNode from '../nodes/Expertise';
import LabelNode from '../nodes/LabelNode';
import CustomEdge from '../CustomEdge';
import Banner from './Banner';
import 'reactflow/dist/style.css';

const proOptions = { hideAttribution: true };

export default function Resume({ resumeData, darkMode, context }) {
 

  const maxColumns = context.isMobile ? 1 : 3;

  const nodeTypes = {
    title: TitleNode,
    summary: SummaryNode,
    experience: ExperienceNode,
    education: EducationNode,
    expertise: ExpertiseNode,
    label: LabelNode,
  };

  const edgeTypes = {
    custom: CustomEdge,
  };

  const yTopMargin = Number(context.headerHeight.replace('px', '')) + 20;
  const columnWidth = context.windowDimensions.width / 12;
  const rowHeight = context.windowDimensions.height / 24;

  let experienceNodes = resumeData.experience.reduce((result, item, index) => {
    const rowIndex = Math.floor(index / maxColumns);
    if (rowIndex % 2 === 0) {
      result.push(item); // even row: keep the order
    } else {
      // odd row: find the start index of the row and insert at the start of the row
      const startIndexOfRow = rowIndex * maxColumns;
      result.splice(startIndexOfRow, 0, item);
    }
    return result;
  }, []);

  const maxRows = Math.floor(experienceNodes.length / maxColumns);

  const mobileXOffset = context.isMobile ? 3 : 1;

  const initialNodes = [
    {
      id: '1',
      type: 'title',
      position: { x: columnWidth, y: rowHeight * 4 },
      data: { label: resumeData.name, darkMode: darkMode, isConnectable: true },
    },
    {
      id: '2',
      type: 'summary',
      position: { x: mobileXOffset * columnWidth * 5, y: rowHeight * 4 },
      data: {
        summary: resumeData.summary,
        darkMode: darkMode,
        isConnectable: true,
      },
    },
    {
      id: '3',
      type: 'label',
      position: { x: columnWidth, y: rowHeight * 8 },
      data: {
        label: 'Expertise',
        darkMode: darkMode,
        isConnectable: true,
        handleOptions: { bottom: 'source', top: 'target', right: 'source' },
      },
    },
    {
      id: '4',
      type: 'label',
      position: { x: columnWidth, y: rowHeight * 12 },
      data: {
        label: 'Experience',
        darkMode: darkMode,
        isConnectable: true,
        handleOptions: { bottom: 'source', top: 'target', right: 'source' },
      },
    },
    {
      id: '5',
      type: 'label',
      position: { x: columnWidth, y: (maxRows + 1) * 300 + yTopMargin * 2 },
      data: {
        label: 'Education',
        darkMode: darkMode,
        isConnectable: true,
        handleOptions: { bottom: 'source', top: 'target', right: 'source' },
      },
    },
    ...resumeData.expertise.map((expertise, index) => ({
      id: `expertise_${index}`,
      type: 'expertise',
      position: { x: mobileXOffset * columnWidth * 3 + 250 * index, y: rowHeight * 9 },
      data: {
        label: expertise,
        darkMode: darkMode,
        isConnectable: true,
        handleOptions: { left: 'source', right: 'source' },
      },
    })),
    ...experienceNodes.map((experience, index) => {
      const row = Math.floor(index / maxColumns);
      const col = index % maxColumns;

      const rowCount = Math.ceil(resumeData.experience.length / maxColumns);
      const colCount = row % 2 === 0 ? maxColumns : maxColumns - 1;
      const currentIndex = index;

      //console.log(experience, index)

      return {
        id: `experience_${index}`,
        type: 'experience',
        position: {
          x: mobileXOffset * columnWidth * 3 + 450 * col,
          y: yTopMargin * 4 + 250 * row,
        },
        data: {
          position: experience.position,
          company: experience.company,
          location: experience.location,
          date: experience.date,
          description: experience.description,
          darkMode: darkMode,
          isConnectable: true,
          rowCount: rowCount,
          colCount: colCount,
          col: col,
          row: row,
          currentIndex: currentIndex,
        },
      };
    }),
    ...resumeData.education.map((education, index) => ({
      id: `education_${index}`,
      type: 'education',
      position: {
        x: mobileXOffset * columnWidth + 350 * (index + 1),
        y: (maxRows + 1) * 300 + yTopMargin * 2.2,
      },
      data: {
        institution: education.institution,
        date: education.date,
        location: education.location,
        degree: education.degree,
        notes: education.notes,
        darkMode: darkMode,
        isConnectable: true,
        index: index,
      },
    })),
  ];

  const experienceEdges = Array.from({
    length: resumeData.experience.length,
  }).map((_, index) => {
    let nextIndex = index + 1;
    const row = Math.floor(index / maxColumns);
    const col = index % maxColumns;
    const isFlowRight = row % 2 == 0;
    let nextRow = Math.floor(nextIndex / maxColumns);
    let sourceHandle, targetHandle;

    const isSameRow = row === nextRow;
    const maxRow = Math.floor(resumeData.experience.length / maxColumns);
    const isLastRow = row === maxRow;

    if (isFlowRight) {
      // For even rows, connect from left to right
      sourceHandle = 'right';
      targetHandle = 'left';
      nextIndex = index + 1;
    } else {
      // For odd rows, connect from right to left
      sourceHandle = 'left';
      targetHandle = 'right';
      nextIndex = index - 1;
    }

    if (
      (col === maxColumns - 1 && isFlowRight) ||
      (col === 0 && !isFlowRight && !isLastRow)
    ) {
      // For the vertical connection, set handles and calculate nextIndex
      sourceHandle = 'bottom';
      targetHandle = 'top';
      nextIndex = index + maxColumns;
    }

    let id = `e_exp_${index}-${nextIndex}`;

    console.log({
      id,
      col,
      row,
      index,
      nextIndex,
      isFlowRight,
      isSameRow,
      isLastRow,
      sourceHandle,
      targetHandle,
      maxColumns,
    });

    return {
      id,
      type: 'custom',
      animated: true,
      style: { stroke: '#f6ad55', strokeWidth: 3 },
      source: `experience_${index}`,
      sourceHandle,
      target: `experience_${nextIndex}`,
      targetHandle,
    };
  });

  console.log(experienceEdges);

  const initialEdges = [
    {
      id: 'e1-2',
      type: 'custom',
      animated: true,
      style: { stroke: '#f6ad55', strokeWidth: 3 },
      source: '1',
      sourceHandle: 'title_to_summary',
      target: '2',
      targetHandle: 'summary_to_title',
    },
    {
      id: 'e1-3',
      type: 'custom',
      animated: true,
      style: { stroke: '#f6ad55', strokeWidth: 3 },
      source: '1',
      sourceHandle: 'title_to_expertise',
      target: '3',
      targetHandle: 'source',
    },
    {
      id: 'expertise-head',
      type: 'custom',
      animated: true,
      style: { stroke: '#f6ad55', strokeWidth: 3 },
      source: '3',
      sourceHandle: 'right_handle',
      target: 'expertise_0',
      targetHandle: 'left',
    },
    {
      id: 'experience-head',
      type: 'custom',
      animated: true,
      style: { stroke: '#f6ad55', strokeWidth: 3 },
      source: '4',
      sourceHandle: 'right_handle',
      target: 'experience_0',
      targetHandle: 'left',
    },
    {
      id: 'education-head',
      type: 'custom',
      animated: true,
      style: { stroke: '#f6ad55', strokeWidth: 3 },
      source: '5',
      sourceHandle: 'right_handle',
      target: 'education_0',
      targetHandle: 'left',
    },
    {
      id: 'e3-4',
      type: 'custom',
      animated: true,
      style: { stroke: '#f6ad55', strokeWidth: 3 },
      source: '3',
      sourceHandle: 'bottom_handle',
      target: '4',
      targetHandle: 'top_handle',
    },
    {
      id: 'e4-5',
      type: 'custom',
      animated: true,
      style: { stroke: '#f6ad55', strokeWidth: 3 },
      source: '4',
      sourceHandle: 'bottom_handle',
      target: '5',
      targetHandle: 'top_handle',
    },
    ...resumeData.expertise.map((_, index) => ({
      id: `expertise_${index}`,
      type: 'custom',
      animated: true,
      style: { stroke: '#f6ad55', strokeWidth: 3 },
      source: `expertise_${index}`,
      sourceHandle: 'left',
      target: `expertise_${index + 1}`,
      targetHandle: 'right',
    })),
    ...experienceEdges,
    ...resumeData.education.flatMap((_, index) => {
      const currentEducationId = `education_${index}`;
      const nextEducationId = `education_${index + 1}`;

      if (index === 0) {
        return [
          {
            id: `e-${currentEducationId}-${nextEducationId}`,
            type: 'custom',
            animated: true,
            style: { stroke: '#f6ad55', strokeWidth: 3 },
            source: currentEducationId,
            sourceHandle: 'right',
            target: nextEducationId,
            targetHandle: 'left',
          },
        ];
      }

      return [
        {
          id: `e-${currentEducationId}-${nextEducationId}`,
          type: 'custom',
          animated: true,
          style: { stroke: '#f6ad55', strokeWidth: 3 },
          source: currentEducationId,
          sourceHandle: 'right',
          target: nextEducationId,
          targetHandle: 'left',
        },
      ];
    }),
  ];

  return (
    <Border className="flex flex-col w-full h-full">
      <Banner darkMode={darkMode} />
      <ReactFlow
        className="w-full h-full"
        nodes={initialNodes}
        edges={initialEdges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        snapToGrid={true}
        minZoom={0.6}
        maxZoom={1}
        zoomOnScroll={true}
        zoomOnPinch={true}
        proOptions={proOptions}
        style={{ background: darkMode ? 'alt-dark' : 'alt-light' }}
      />
    </Border>
  );
}
