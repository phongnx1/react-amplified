/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateWorkslogMembers = /* GraphQL */ `
  subscription OnCreateWorkslogMembers(
    $filter: ModelSubscriptionWorkslogMembersFilterInput
  ) {
    onCreateWorkslogMembers(filter: $filter) {
      member_id
      name
      team_name
      start_date
      end_date
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateWorkslogMembers = /* GraphQL */ `
  subscription OnUpdateWorkslogMembers(
    $filter: ModelSubscriptionWorkslogMembersFilterInput
  ) {
    onUpdateWorkslogMembers(filter: $filter) {
      member_id
      name
      team_name
      start_date
      end_date
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteWorkslogMembers = /* GraphQL */ `
  subscription OnDeleteWorkslogMembers(
    $filter: ModelSubscriptionWorkslogMembersFilterInput
  ) {
    onDeleteWorkslogMembers(filter: $filter) {
      member_id
      name
      team_name
      start_date
      end_date
      createdAt
      updatedAt
    }
  }
`;
export const onCreateWorkslogSpaces = /* GraphQL */ `
  subscription OnCreateWorkslogSpaces(
    $filter: ModelSubscriptionWorkslogSpacesFilterInput
  ) {
    onCreateWorkslogSpaces(filter: $filter) {
      space_id
      sort_no
      space_name
      start_date
      end_date
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateWorkslogSpaces = /* GraphQL */ `
  subscription OnUpdateWorkslogSpaces(
    $filter: ModelSubscriptionWorkslogSpacesFilterInput
  ) {
    onUpdateWorkslogSpaces(filter: $filter) {
      space_id
      sort_no
      space_name
      start_date
      end_date
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteWorkslogSpaces = /* GraphQL */ `
  subscription OnDeleteWorkslogSpaces(
    $filter: ModelSubscriptionWorkslogSpacesFilterInput
  ) {
    onDeleteWorkslogSpaces(filter: $filter) {
      space_id
      sort_no
      space_name
      start_date
      end_date
      createdAt
      updatedAt
    }
  }
`;
export const onCreateWorkslogWorks = /* GraphQL */ `
  subscription OnCreateWorkslogWorks(
    $filter: ModelSubscriptionWorkslogWorksFilterInput
  ) {
    onCreateWorkslogWorks(filter: $filter) {
      work_id
      date
      member_id
      space_id_am
      space_id_pm
      flex_am
      flex_pm
      memo
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateWorkslogWorks = /* GraphQL */ `
  subscription OnUpdateWorkslogWorks(
    $filter: ModelSubscriptionWorkslogWorksFilterInput
  ) {
    onUpdateWorkslogWorks(filter: $filter) {
      work_id
      date
      member_id
      space_id_am
      space_id_pm
      flex_am
      flex_pm
      memo
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteWorkslogWorks = /* GraphQL */ `
  subscription OnDeleteWorkslogWorks(
    $filter: ModelSubscriptionWorkslogWorksFilterInput
  ) {
    onDeleteWorkslogWorks(filter: $filter) {
      work_id
      date
      member_id
      space_id_am
      space_id_pm
      flex_am
      flex_pm
      memo
      createdAt
      updatedAt
    }
  }
`;
export const onCreateWorkslogHolidays = /* GraphQL */ `
  subscription OnCreateWorkslogHolidays(
    $filter: ModelSubscriptionWorkslogHolidaysFilterInput
  ) {
    onCreateWorkslogHolidays(filter: $filter) {
      holiday_id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateWorkslogHolidays = /* GraphQL */ `
  subscription OnUpdateWorkslogHolidays(
    $filter: ModelSubscriptionWorkslogHolidaysFilterInput
  ) {
    onUpdateWorkslogHolidays(filter: $filter) {
      holiday_id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteWorkslogHolidays = /* GraphQL */ `
  subscription OnDeleteWorkslogHolidays(
    $filter: ModelSubscriptionWorkslogHolidaysFilterInput
  ) {
    onDeleteWorkslogHolidays(filter: $filter) {
      holiday_id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTest = /* GraphQL */ `
  subscription OnCreateTest($filter: ModelSubscriptionTestFilterInput) {
    onCreateTest(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTest = /* GraphQL */ `
  subscription OnUpdateTest($filter: ModelSubscriptionTestFilterInput) {
    onUpdateTest(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTest = /* GraphQL */ `
  subscription OnDeleteTest($filter: ModelSubscriptionTestFilterInput) {
    onDeleteTest(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
