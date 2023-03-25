import {
  STATUS_OBJ,
  ACTION_TYPES,
} from "../constant/objectConstant";
import saveToLS, {
  getUsersFromLS,
} from "../localStorage/localStorage";
import {
  IActionType,
  AppStateType,
  UserDataType,
} from "../types/types";
import getUsersData from "../api/fetchUserData";

export const getListOfUsers = async (
  dispatch: React.Dispatch<IActionType>
) => {
  // Gets Data from mock API.
  const { allUserData } = await getUsersData();

  // Saves "allUserData" to LocalStorage if null.
  saveToLS(allUserData);

  // Retrievs saved data from LocalStorage for use.
  const users = getUsersFromLS() as UserDataType[];

  // Saves to ReactJs's state for updating UI.
  dispatch({
    type: ACTION_TYPES.ALL_USERS_DATA,
    payload: users,
  });
};

/********************************************************
 * This function will take the table data array and will
 * return an array with arrays of items of the table data
 * split into any spacified number passed to it.
 ********************************************************/
export function splitArray(
  parts: number,
  array: UserDataType[]
) {
  const result = [];
  const chunkSize = Math.floor(array.length / parts);
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}

export const updateState = (
  state: AppStateType,
  updates: Partial<AppStateType>
) => {
  return {
    ...state,
    ...updates,
  };
};

export const displayInitialPages = (pages: number) => {
  if (pages > 5) {
    return [1, 2, 3, "...", pages - 1, pages];
  }
  return [1, 2, 3, 4, 5];
};

export const newPagesToDisplay = (
  pages: number,
  currentPage: number
) => {
  if (pages - 1 - currentPage <= 2 && pages > 5) {
    if (currentPage >= pages - 1) {
      return [1, 2, 3, "...", pages - 1, pages];
    }
    return [1, 2, "...", pages - 2, pages - 1, pages];
  }
  return [
    1,
    2,
    "...",
    currentPage + 1,
    "...",
    pages - 1,
    pages,
  ];
};

export const setArrayContent = (pages: number) => {
  let newPagesToDisplay = [];
  for (let i = 1; i <= pages; i++) {
    newPagesToDisplay.push(i);
  }
  return newPagesToDisplay;
};

interface IPrevPage {
  currentPage: number;
  dispatch: React.Dispatch<IActionType>;
}

interface INextPage extends IPrevPage {
  numberOfPages: number;
}

export const prevPage = ({
  dispatch,
  currentPage,
}: IPrevPage) => {
  dispatch({
    type: ACTION_TYPES.PAGE_NUMBER,
    payload: currentPage > 2 ? currentPage - 1 : 0,
  });
};

export const nextPage = ({
  dispatch,
  currentPage,
  numberOfPages,
}: INextPage) => {
  dispatch({
    type: ACTION_TYPES.PAGE_NUMBER,
    payload:
      currentPage < numberOfPages - 1
        ? currentPage + 1
        : numberOfPages - 1,
  });
};

export function formatTime(timeStr: string) {
  // Parse time string
  const date = new Date(timeStr);

  // Format the date and time strings
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  // Concatenate the formatted date and time strings
  return `${formattedDate} ${formattedTime}`;
}

export const addStatusProp = (user: UserDataType) => {
  const firstLetter = user.email.charAt(0).toUpperCase();
  if (STATUS_OBJ.ACTIVE.includes(firstLetter))
    user.active = "Active";
  else if (STATUS_OBJ.PENDING.includes(firstLetter))
    user.active = "Pending";
  else if (STATUS_OBJ.INACTIVE.includes(firstLetter))
    user.active = "Inactive";
  if (STATUS_OBJ.BLACKLISTED.includes(firstLetter))
    user.active = "Blacklisted";
  return user;
};

export function toggleNavBar(width: string) {
  const phoneNavBar = document.getElementById("phone-nav");
  const navContainer = document.getElementById(
    "phone-nav-container"
  );

  if (phoneNavBar && navContainer && width === "280px") {
    navContainer.classList.add("show");
    setTimeout(
      () => (phoneNavBar.style.width = width),
      300
    );
  } else {
    if (phoneNavBar && navContainer) {
      phoneNavBar.style.width = width;
      setTimeout(
        () => navContainer.classList.remove("show"),
        500
      );
    }
  }
}
