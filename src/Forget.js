import React from "react";

export default function Forget() {
  return (
    <>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className=" d-flex justify-content-center align-items-center h-100">
            <div className="card rounded">
              <h3 className="mt-1 mb-4 text-warning text-center">
                Reset Passowrd
              </h3>

              <div className="card-body">
                <form action="">
                  <div className="col-auto ">
                    <h6 className="ml-0">Enter Email</h6>
                    <label className="sr-only" htmlFor="inlineFormInputGroup">
                      Username
                    </label>
                    <div className="input-group mb-4">
                      <span className="input-group-text bg-warning">
                        <i className="fa-solid fa-user"></i>
                      </span>

                      <input
                        type="email"
                        className="form-control mt-0"
                        id="inlineFormInputGroup"
                        placeholder="Username"
                        name="email"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col mx-auto d-grid">
                      <button className="btn btn-primary btn-block  mb-2 text-center ">
                        SUBMIT
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
