import { UserDataType } from "../types/types";

// API URL for User Data
const url = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";

// Gets all users from an API
export default async function getUsersData() {
  const users = await fetch(url);
  const allUserData = (await users.json()) as UserDataType[];
  return { allUserData };
}
