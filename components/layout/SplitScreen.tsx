import * as React from 'react';

function Container({ children }: { children: React.ReactNode }) {
  return <div className='flex'>{children}</div>;
}

function Pane({
  weight,
  children,
}: {
  weight: number;
  children: React.ReactNode;
}) {
  return <div style={{ flex: weight }}>{children}</div>;
}

export default function SplitScreen({
  children,
  leftWeight = 1,
  rightWeight = 1,
}: {
  children: [React.ReactNode, React.ReactNode];
  leftWeight?: number;
  rightWeight?: number;
}) {
  const [leftComponent, rightComponent] = children;
  return (
    <Container>
      <Pane weight={leftWeight}>{leftComponent}</Pane>
      <Pane weight={rightWeight}>{rightComponent}</Pane>
    </Container>
  );
}
