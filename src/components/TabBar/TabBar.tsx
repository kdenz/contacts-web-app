import React from "react";
import { Container, TabButton } from "./styled";

export type Tab = {
  key: string;
  label: string;
};
export interface TabBarProps {
  tabs: Tab[];
  activeTab: string;
}
export const TabBar: React.FC<TabBarProps> = ({ tabs, activeTab }) => {
  return (
    <Container>
      {tabs.map(tab => {
        return (
          <TabButton key={tab.key} isActive={tab.key === activeTab}>
            {tab.label}
          </TabButton>
        );
      })}
    </Container>
  );
};
