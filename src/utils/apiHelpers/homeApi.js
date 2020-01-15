export const getProfiles = () =>{
    let mockProfiles = [
        {
          name: "Alex",
          keyCode: "123",
          imageSrc: "https://www.fillmurray.com/400/400"
        },
        {
          name: "Jean",
          keyCode: "xyz",
          imageSrc: "https://www.fillmurray.com/400/401"
        },
        {
          name: "Clover",
          keyCode: "abc",
          imageSrc: "https://www.fillmurray.com/400/402"
        },
        {
          name: "Eric",
          keyCode: "456",
          imageSrc: "https://www.fillmurray.com/400/403"
  
        }
    ];
    return new Promise((resolve)=>resolve(mockProfiles));
}