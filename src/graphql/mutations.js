/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createWorkslogMembers = /* GraphQL */ `
  mutation CreateWorkslogMembers(
    $input: CreateWorkslogMembersInput!
    $condition: ModelWorkslogMembersConditionInput
  ) {
    createWorkslogMembers(input: $input, condition: $condition) {
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
export const updateWorkslogMembers = /* GraphQL */ `
  mutation UpdateWorkslogMembers(
    $input: UpdateWorkslogMembersInput!
    $condition: ModelWorkslogMembersConditionInput
  ) {
    updateWorkslogMembers(input: $input, condition: $condition) {
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
export const deleteWorkslogMembers = /* GraphQL */ `
  mutation DeleteWorkslogMembers(
    $input: DeleteWorkslogMembersInput!
    $condition: ModelWorkslogMembersConditionInput
  ) {
    deleteWorkslogMembers(input: $input, condition: $condition) {
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
export const createWorkslogSpaces = /* GraphQL */ `
  mutation CreateWorkslogSpaces(
    $input: CreateWorkslogSpacesInput!
    $condition: ModelWorkslogSpacesConditionInput
  ) {
    createWorkslogSpaces(input: $input, condition: $condition) {
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
export const updateWorkslogSpaces = /* GraphQL */ `
  mutation UpdateWorkslogSpaces(
    $input: UpdateWorkslogSpacesInput!
    $condition: ModelWorkslogSpacesConditionInput
  ) {
    updateWorkslogSpaces(input: $input, condition: $condition) {
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
export const deleteWorkslogSpaces = /* GraphQL */ `
  mutation DeleteWorkslogSpaces(
    $input: DeleteWorkslogSpacesInput!
    $condition: ModelWorkslogSpacesConditionInput
  ) {
    deleteWorkslogSpaces(input: $input, condition: $condition) {
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
export const createWorkslogWorks = /* GraphQL */ `
  mutation CreateWorkslogWorks(
    $input: CreateWorkslogWorksInput!
    $condition: ModelWorkslogWorksConditionInput
  ) {
    createWorkslogWorks(input: $input, condition: $condition) {
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
export const updateWorkslogWorks = /* GraphQL */ `
  mutation UpdateWorkslogWorks(
    $input: UpdateWorkslogWorksInput!
    $condition: ModelWorkslogWorksConditionInput
  ) {
    updateWorkslogWorks(input: $input, condition: $condition) {
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
export const deleteWorkslogWorks = /* GraphQL */ `
  mutation DeleteWorkslogWorks(
    $input: DeleteWorkslogWorksInput!
    $condition: ModelWorkslogWorksConditionInput
  ) {
    deleteWorkslogWorks(input: $input, condition: $condition) {
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
export const createWorkslogHolidays = /* GraphQL */ `
  mutation CreateWorkslogHolidays(
    $input: CreateWorkslogHolidaysInput!
    $condition: ModelWorkslogHolidaysConditionInput
  ) {
    createWorkslogHolidays(input: $input, condition: $condition) {
      holiday_id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateWorkslogHolidays = /* GraphQL */ `
  mutation UpdateWorkslogHolidays(
    $input: UpdateWorkslogHolidaysInput!
    $condition: ModelWorkslogHolidaysConditionInput
  ) {
    updateWorkslogHolidays(input: $input, condition: $condition) {
      holiday_id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteWorkslogHolidays = /* GraphQL */ `
  mutation DeleteWorkslogHolidays(
    $input: DeleteWorkslogHolidaysInput!
    $condition: ModelWorkslogHolidaysConditionInput
  ) {
    deleteWorkslogHolidays(input: $input, condition: $condition) {
      holiday_id
      name
      createdAt
      updatedAt
    }
  }
`;
export const createTest = /* GraphQL */ `
  mutation CreateTest(
    $input: CreateTestInput!
    $condition: ModelTestConditionInput
  ) {
    createTest(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTest = /* GraphQL */ `
  mutation UpdateTest(
    $input: UpdateTestInput!
    $condition: ModelTestConditionInput
  ) {
    updateTest(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTest = /* GraphQL */ `
  mutation DeleteTest(
    $input: DeleteTestInput!
    $condition: ModelTestConditionInput
  ) {
    deleteTest(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
