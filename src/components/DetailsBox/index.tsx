import React, { useState } from "react";
import styled from "styled-components";
import { companyPreferences, SinglePreference } from "../../data";
import { useModal } from "../../hooks/useModal";
import Accordion from "../Accordion";
import Button from "../Button";
import CheckboxesTree from "../CheckboxesTree";
import CompanyId from "../CompanyId";
import Divider from "../Divider";
import Heading from "../Heading";
import Modal from "../Modal";
import Preferences from "../Preferences";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.common.white};
  border-radius: ${({ theme }) => theme.borderRadiuses.large};
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  min-width: 750px;
`;

const ModalTitle = styled.div`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: 16px;
  text-transform: uppercase;
`;

const ModalContent = styled.div`
  min-width: 744px;
  padding-right: 15px;
`;

const AccessBtn = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.common.red};
  font-size: ${({ theme }) => theme.fontSizes.normal};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  text-decoration: underline;
  cursor: pointer;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const DetailsBox: React.FC = () => {
  const { openModal, isOpen, closeModal } = useModal();
  const [sortedPreferences, setSortedPreferences] = useState<{
    [key: number]: SinglePreference[];
  }>({});

  return (
    <>
      <Container>
        <div>
          <Heading>Selected company</Heading>
          <CompanyId id="1-2300423445" name="Company XYZ" />
        </div>
        <Preferences preferences={sortedPreferences} />
        <Button onClick={openModal}>
          {sortedPreferences &&
          Object.values(sortedPreferences).every((array) => array.length === 0)
            ? "Add"
            : "Edit"}{" "}
          preferences
        </Button>
      </Container>

      <Modal
        opened={isOpen}
        onClose={closeModal}
        footer={
          <ModalFooter>
            <Button onClick={closeModal}>Save & Close</Button>{" "}
            <AccessBtn>Remove access</AccessBtn>
          </ModalFooter>
        }
      >
        <ModalContent>
          <ModalTitle>Edit user’s privileges for a company</ModalTitle>
          <Heading>Selected company</Heading>
          <CompanyId id="1-2300423445" name="Company XYZ" />
          <Divider />

          {companyPreferences.map((preference, index) => (
            <Accordion
              key={preference.gId}
              title={preference.title}
              expandedOnStart={index === 0}
              text={
                <div>
                  Selected{" "}
                  {sortedPreferences[preference.gId]?.length
                    ? sortedPreferences[preference.gId]?.length
                    : 0}{" "}
                  of {preference.data.length} services selected
                </div>
              }
            >
              <CheckboxesTree
                options={preference.data}
                onChange={(preferences) => {
                  setSortedPreferences({
                    ...sortedPreferences,
                    [preference.gId]: preferences,
                  });
                }}
              />
            </Accordion>
          ))}
        </ModalContent>
      </Modal>
    </>
  );
};

export default DetailsBox;
