async function getUserInfo(token: string) {
  const options: RequestInit = {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "x-auth-token": token,
    },
  };
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/user/profile`,
    options
  );

  const { body } = await res.json();
  console.log(body);
  return body.data;
}

export const userService = { getUserInfo };
