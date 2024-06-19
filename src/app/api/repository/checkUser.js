export default function checkUser(username, password) {
  const envUserName = process.env.USERNAME.toLocaleLowerCase();
  const envUserPass = process.env.USERPASSWORD.toLocaleLowerCase();
  return username.trim() == envUserName && password.trim() == envUserPass;
}
