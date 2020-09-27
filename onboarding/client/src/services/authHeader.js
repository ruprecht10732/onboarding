export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user.token);

  if (user && user.token) {
    // for Node.js Express back-end
    return { Authorization: `Bearer ${user.token}` };
  } else {
    return {};
  }
}
