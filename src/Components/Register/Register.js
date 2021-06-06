import React from "react";

const Register = () => {
  return (
    <div class="card">
      <div class="card-header">Register</div>
      <div class="card-body">
        <form
          method="post"
          action="/register"
          enctype="application/x-www-form-urlencoded"
        >
          <div class="mb-3">
            <label for="FullName" class="form-label">
              Full Name
            </label>
            <input
              name="FullName"
              type="text"
              class="form-control"
              id="FullName"
              aria-describedby="FullNameHelp"
            />
            <div id="FullNameHelp" class="form-text">
              How should we call you?
            </div>
          </div>
          <div class="mb-3">
            <label for="RegisterEmail" class="form-label">
              Email address
            </label>
            <input
              name="Email"
              type="email"
              class="form-control"
              id="RegisterEmail"
              aria-describedby="RegisterEmailHelp"
            />
            <div id="RegisterEmailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="RegisterPassword" class="form-label">
              Password
            </label>
            <input
              name="Password"
              type="password"
              class="form-control"
              id="RegisterPassword"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
