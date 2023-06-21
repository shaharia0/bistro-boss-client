import { Link } from "react-router-dom";
import { LoadCanvasTemplate } from "react-simple-captcha";

const SignUp = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row">
      <div className="text-center md:w-1/2 lg:text-left">
        <h1 className="text-5xl font-bold">Sign Up!</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      </div>
      <form  className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name="name" placeholder="name" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="password" className="input input-bordered" />
            
          </div>
          <div className="form-control mt-6">
            <input  className="btn btn-primary" type="submit" value="signup" />
          </div>
        </div>
      <div className='ml-10 mb-5'>
      <p><small>Already have an Account? <Link to="/login">Login Here </Link> </small></p>
      </div>
      </form>
    </div>
  </div>
  );
};

export default SignUp;