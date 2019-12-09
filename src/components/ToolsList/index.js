import React from 'react';
import { MdClear } from 'react-icons/md'

import {
  CardsContainer,
  ToolCard,
  CardHeader,
  CardTitle,
  CardButton,
  CardDescription,
  TagsContainer
} from './styles';

export default function ToolsList({ tools, removeTool }) {
  return (
    <CardsContainer>
      {tools.map(tool => (
        <ToolCard key={tool.id}>
          <CardHeader>
            <CardTitle href={tool.link}>{tool.title}</CardTitle>
            <CardButton onClick={() => removeTool(tool.id)}>
              <MdClear size={30} />
              <p>remove</p>
            </CardButton>
          </CardHeader>
          <CardDescription>{tool.description}</CardDescription>
          <TagsContainer>
          {tool.tags.map(tag => (
            <div key={tag}>
              <span>#</span>
              <p>{tag}</p>
            </div>
          ))}
          </TagsContainer>
        </ToolCard>
      ))}
    </CardsContainer>
  );
}
