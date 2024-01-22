import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { FormRow } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { updateUser } from "../../features/user/userSlice";

const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    lastName: user?.lastName || "",
    location: user?.location || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, lastName, location } = userData;
    if (!name || !email || !lastName || !location) {
      toast.error("All fields are required");
      return;
    }
    dispatch(updateUser(userData));
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Profile</h3>
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={userData.name}
            handleChange={handleChange}
            isLoading={isLoading}
          />
          <FormRow
            type="text"
            labelText="last name"
            name="lastName"
            value={userData.lastName}
            handleChange={handleChange}
            isLoading={isLoading}
          />
          <FormRow
            type="email"
            name="email"
            value={userData.email}
            handleChange={handleChange}
            isLoading={isLoading}
          />
          <FormRow
            type="text"
            name="location"
            value={userData.location}
            handleChange={handleChange}
            isLoading={isLoading}
          />
          <button type="submit" className="btn btn-block" disabled={isLoading}>
            {isLoading ? "Saving..." : "Save Changes"}{" "}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default Profile;