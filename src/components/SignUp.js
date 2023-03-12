function SignUp() {
  return (
    <div
    // style={{
    //   backgroundImage: `url("https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2545.jpg")`,
    //   backgroundRepeat: "no-repeat",
    //   width: "1280px",
    // }}
    >
      <div className="container">
        <div>
          <div className="d-flex flex-column align-items-center justify-content-between ">
            <div className="border rounded w-25 container mt-5 d-flex flex-column align-items-center">
              <div className="d-flex gap-2 flex-column mt-5">
                <label className="bold">USERNAME</label>
                <div>
                  <input
                    className="form-control w-100"
                    placeholder="Enter username"
                  />
                </div>
              </div>
              <div className="d-flex gap-2 flex-column mt-3">
                <label className="bold">EMAIL</label>
                <div className="d-flex gap-3 align-items-center">
                  <div>
                    <input
                      className="form-control w-100"
                      placeholder="Enter email"
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex gap-2 flex-column mt-3">
                <label className="bold">PASSWORD</label>
                <div className="d-flex gap-3 align-items-center">
                  <div>
                    <input
                      className="form-control "
                      placeholder="Enter password"
                    />
                  </div>
                  {/* <div>
                  <i class="bi bi-eye-fill"></i>
                  <i class="bi bi-eye-slash-fill"></i>
                </div> */}
                </div>
              </div>
              <div className="d-flex gap-2 flex-column mt-3 mb-5">
                <label className="bold">CONFIRM PASSWORD</label>
                <div className="d-flex gap-3 align-items-center">
                  <div>
                    <input
                      className="form-control "
                      placeholder="Enter password"
                    />
                  </div>
                  {/* <div>
                  <i class="bi bi-eye-fill"></i>
                  <i class="bi bi-eye-slash-fill"></i>
                </div> */}
                </div>
              </div>
            </div>
            <div className="d-flex gap-2 mt-3">
              <button className="btn btn-primary">Sign Up</button>
              <button className="btn btn-warning">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
