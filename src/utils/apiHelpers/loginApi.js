export const getProfileData = priorLogin => {
  let mockProfiles = ["Jen", "Alex", "Tony", "Dean", "Chance"];
  if (Math.random() < 0.25) {
    let sendObj = { userName: null, errors: "Invalid Credentials" };
    return new Promise(resolve => resolve(sendObj));
  } else {
    let profile = priorLogin
      ? sessionStorage.getItem("name")
      : mockProfiles[Math.floor(Math.random() * 5)];
    let sendObj = { userName: profile, errors: null };
    // sessionStorage.setItem("name", profile);
    // sessionStorage.setItem("loggedIn", true);
    return new Promise(resolve => resolve(sendObj));
  }
};
