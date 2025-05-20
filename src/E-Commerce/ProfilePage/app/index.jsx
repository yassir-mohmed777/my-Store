import { useEffect, useState } from "react";
import NavHeader from "../ui/NavHeader";
import SidebarMenu from "../ui/SidebarMenu";
import UserDeatils from "../ui/UserDetails";
import UserHistory from "../ui/UserHistory";
import { OrderRepo } from "../../../data/repos/OrderRepo";

export default function ProfilePage() {
  const [userInfo, setUserInfo] = useState();
  const [userOrder, setUserOrder] = useState([]);

  useEffect(() => {
    let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    // let userId = sessionStorage.getItem('userId')
    setUserInfo(userInfo);
    // OrderRepo.show_order(userId).then((res) => {
    //   setUserOrder(res)
    // })
  }, []);

  return (
    <div className="col-12">
      <NavHeader />
      <div className="d-flex flex-wrap container my-5">
        <div className="col-12 col-md-3">
          <SidebarMenu />
        </div>
        <div className="col-12 col-md-9 p-0 p-md-5">
          <UserHistory
            userOrder={userOrder && userOrder}
            userName={userInfo && userInfo.user_name}
          />
          {userInfo && (
            <UserDeatils
              userName={userInfo.user_name}
              userEmail={userInfo.user_email}
            />
          )}
        </div>
      </div>
    </div>
  );
}
