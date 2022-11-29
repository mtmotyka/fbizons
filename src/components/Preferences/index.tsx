import React from "react";
import styled from "styled-components";
import { SinglePreference } from "../../data";
import Heading from "../Heading";

type Props = {
  preferences: {
    [key: number]: SinglePreference[];
  };
};

const StyledList = styled.ul<{ isSublist?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: ${({ isSublist }) => (isSublist ? "0 0 0 40px" : "0 0 0 20px")};
  margin: 0;
`;

const ListItem = styled.li`
  color: ${({ theme }) => theme.colors.common.text};
  margin-bottom: 7px;
  &::marker {
    color: #1c5a7d;
  }
`;

const Preferences: React.FC<Props> = ({ preferences }) => {
  return (
    <div>
      <Heading>Chosen preferences:</Heading>
      {!Object.values(preferences).every((array) => array.length === 0) ? (
        <>
          {Object.keys(preferences).map((key) => {
            return (
              <StyledList key={key}>
                {preferences[key as any].map((preference) => {
                  if (!preference.parentId) {
                    return (
                      <>
                        <ListItem key={preference.id}>
                          {preference.label}
                        </ListItem>
                        <StyledList isSublist>
                          {preferences[key as any].map((subPreference) => {
                            if (subPreference.parentId === preference.id) {
                              return (
                                <ListItem key={subPreference.id}>
                                  {subPreference.label}
                                </ListItem>
                              );
                            }
                            return null;
                          })}
                        </StyledList>
                      </>
                    );
                  }
                  return null;
                })}
              </StyledList>
            );
          })}
        </>
      ) : (
        <div>You don't have any preferences chosen.</div>
      )}
    </div>
  );
};

export default Preferences;
