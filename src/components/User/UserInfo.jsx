import React from "react";

const UserInfo = () => {
  return (
    <div className="grid h-screen place-items-center">
      <div className=" shadow-md p-5">
      <h1>User</h1>
<div>
    Name: <span>alif</span>
</div>
<div>
    email: <span>alif@gmail.com</span>
</div>
<button className="bg-red-500">Logout</button>
      </div>
    </div>
  );
};

export default UserInfo;
