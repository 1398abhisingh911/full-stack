import React from "react";

const Login = () => {
  return (
    <div class="card">
      <div class="card-header">Sign In</div>
      <div class="card-body">
        <form
          method="post"
          action="/login"
          enctype="application/x-www-form-urlencoded"
        >
          <div class="mb-3">
            <label for="Email" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              name="Email"
              id="Email"
              aria-describedby="EmailHelp"
            />
            <div id="EmailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="LoginPassword" class="form-label">
              Password
            </label>
            <input
              type="password"
              name="Password"
              class="form-control"
              id="LoginPassword"
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

export default Login;
