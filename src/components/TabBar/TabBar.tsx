import React, { useCallback } from "react";
import { Container, TabButton } from "./styled";

export type Tab = {
  key: string;
  label: string;
};
export interface TabBarProps {
  tabs: Tab[];
  activeTab: string;
  onTabClick: (clickedTab: string) => void;
}
export const TabBar: React.FC<TabBarProps> = ({
  tabs,
  activeTab,
  onTabClick
}) => {
  const onTabButtonClick = useCallback(
    (tab: string) => () => {
      onTabClick(tab);
    },
    [onTabClick]
  );
  return (
    <Container>
      {tabs.map(tab => {
        return (
          <TabButton
            key={tab.key}
            isActive={tab.key === activeTab}
            onClick={onTabButtonClick(tab.key)}
          >
            {tab.label}
          </TabButton>
        );
      })}
    </Container>
  );
};
