import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { companyPreferences, SinglePreference } from "../../data";
import Checkbox from "../Checkbox";

type Props = {
  options: SinglePreference[];
  onChange: (options: SinglePreference[]) => void;
};

const CheckboxesList = styled.div<{ isSublist?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: ${({ isSublist }) => (isSublist ? "0 0 0 30px" : "0")};
`;

const CheckboxesTree: React.FC<Props> = ({ options, onChange }) => {
  const [selectedPreferences, setSelectedPreferences] = useState<
    SinglePreference[]
  >([]);
  const isChecked = (id: number) => {
    return selectedPreferences.some((p) => p.id === id);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    groupId: number,
    preference: SinglePreference
  ) => {
    const subPreferences = companyPreferences[groupId - 1].data.filter(
      (p) => p.parentId === preference.id
    );
    const parentPreference = companyPreferences[groupId - 1].data.find(
      (p) => p.id === preference.parentId
    );
    let newPreferences = [...selectedPreferences];

    if (e.target.checked) {
      //handle click on main preference
      if (preference.parentId === undefined) {
        newPreferences = [...newPreferences, ...subPreferences, preference];
        //handle click on subpreference
      } else {
        //handle click on children preference and adding parent preference
        if (parentPreference && isChecked(parentPreference.id)) {
          newPreferences = [
            ...selectedPreferences,
            ...subPreferences,
            preference,
          ];
        } else if (parentPreference) {
          newPreferences = [
            ...selectedPreferences,
            preference,
            ...subPreferences,
            parentPreference,
          ];
        }
      }
    }

    if (!e.target.checked) {
      //handle click on main preference
      if (preference.parentId === undefined) {
        newPreferences = selectedPreferences.filter((p) => p !== preference);
        //remove all subpreferences of clicked main preference
        subPreferences.forEach((subPreference) => {
          newPreferences = newPreferences.filter((p) => p !== subPreference);
        });
        //handle click on subpreference
      } else {
        newPreferences = selectedPreferences.filter((p) => p !== preference);
        //if it's the last subpreference in group, remove parent preference
        if (
          !newPreferences.some(
            (p) => p.parentId === preference.parentId && p !== preference
          )
        ) {
          newPreferences = newPreferences.filter(
            (p) => p.id !== preference.parentId
          );
        }
      }
    }
    setSelectedPreferences(newPreferences);
  };

  useEffect(() => {
    onChange(selectedPreferences);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPreferences]);

  return (
    <CheckboxesList>
      {options
        .filter((i) => !i.parentId)
        .map((option) => (
          <>
            <Checkbox
              label={option.label}
              checked={isChecked(option.id)}
              onChange={(e) => handleChange(e, option.groupId, option)}
            />
            <CheckboxesList isSublist>
              {options
                .filter((i) => i.parentId === option.id)
                .map((subOption) => (
                  <Checkbox
                    label={subOption.label}
                    checked={isChecked(subOption.id)}
                    onChange={(e) => handleChange(e, option.groupId, subOption)}
                  />
                ))}
            </CheckboxesList>
          </>
        ))}
    </CheckboxesList>
  );
};

export default CheckboxesTree;
