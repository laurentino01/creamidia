async function getUserInfo(token: string) {
  const options: RequestInit = {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "x-auth-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNhYWJkNi1kZWJhLTQwYTMtYjdjZi02YWI2NTcxYjMwMDMiLCJlbWFpbCI6ImxhdXJlbnRpbm9AZ21haWwuY29tIiwibmFtZSI6ImdhYnJpZWwiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2OTk1NjkzODd9.WR6CgUWkN7htXNqNCng4cE2hp4ZMgaH-gOxg7eVXhi0",
    },
  };
  const res = await fetch("http://localhost:3001/user/profile", options);

  const { body } = await res.json();

  return body.data;
}

export const userService = { getUserInfo };
