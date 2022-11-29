export type CompanyPreferences = {
  title: string;
  gId: number;
  data: SinglePreference[];
};

export type SinglePreference = {
  id: number;
  label: string;
  parentId?: number;
  groupId: number;
};

export const companyPreferences: CompanyPreferences[] = [
  {
    title: "Employees",
    gId: 1,
    data: [
      {
        groupId: 1,
        id: 1,
        label: "diam1",
      },
      { groupId: 1, id: 2, label: "diam2" },
      { groupId: 1, id: 3, label: "diam3" },
      { groupId: 1, id: 4, label: "diam4" },
      { groupId: 1, id: 5, label: "subdiam4-1", parentId: 4 },
      { groupId: 1, id: 6, label: "subdiam4-2", parentId: 4 },
      { groupId: 1, id: 7, label: "subdiam4-3", parentId: 4 },
      { groupId: 1, id: 8, label: "subdiam1-1", parentId: 1 },
    ],
  },
  {
    title: "Employees 2",
    gId: 2,
    data: [
      { groupId: 2, id: 1, label: "lorem1" },
      { groupId: 2, id: 2, label: "lorem2" },
      { groupId: 2, id: 3, label: "lorem3" },
      { groupId: 2, id: 4, label: "lorem4" },
      { groupId: 2, id: 5, label: "sublorem1-1", parentId: 1 },
    ],
  },
];
