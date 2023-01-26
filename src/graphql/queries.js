/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getWorkslogMembers = /* GraphQL */ `
  query GetWorkslogMembers($member_id: String!) {
    getWorkslogMembers(member_id: $member_id) {
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
export const listWorkslogMembers = /* GraphQL */ `
  query ListWorkslogMembers(
    $member_id: String
    $filter: ModelWorkslogMembersFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listWorkslogMembers(
      member_id: $member_id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        member_id
        name
        team_name
        start_date
        end_date
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getWorkslogSpaces = /* GraphQL */ `
  query GetWorkslogSpaces($space_id: String!, $sort_no: Int!) {
    getWorkslogSpaces(space_id: $space_id, sort_no: $sort_no) {
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
export const listWorkslogSpaces = /* GraphQL */ `
  query ListWorkslogSpaces(
    $space_id: String
    $sort_no: ModelIntKeyConditionInput
    $filter: ModelWorkslogSpacesFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listWorkslogSpaces(
      space_id: $space_id
      sort_no: $sort_no
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        space_id
        sort_no
        space_name
        start_date
        end_date
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getWorkslogWorks = /* GraphQL */ `
  query GetWorkslogWorks($work_id: String!) {
    getWorkslogWorks(work_id: $work_id) {
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
export const listWorkslogWorks = /* GraphQL */ `
  query ListWorkslogWorks(
    $work_id: String
    $filter: ModelWorkslogWorksFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listWorkslogWorks(
      work_id: $work_id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getWorkslogHolidays = /* GraphQL */ `
  query GetWorkslogHolidays($holiday_id: String!) {
    getWorkslogHolidays(holiday_id: $holiday_id) {
      holiday_id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listWorkslogHolidays = /* GraphQL */ `
  query ListWorkslogHolidays(
    $holiday_id: String
    $filter: ModelWorkslogHolidaysFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listWorkslogHolidays(
      holiday_id: $holiday_id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        holiday_id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTest = /* GraphQL */ `
  query GetTest($id: ID!) {
    getTest(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTests = /* GraphQL */ `
  query ListTests(
    $filter: ModelTestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
