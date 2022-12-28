import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import React from "react";
import Layout from "../../components/layout";
import Login from "../../components/login";
import { getCookie } from "../../utils/utils";
import google from "../../public/google-logo-search-new-svgrepo-com.svg"
import facebook from "../../public/facebook-logo-meta-2-svgrepo-com.svg"

getCookie;
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.getCookie = getCookie.bind(this);
  }

  render() {
    if (this.getCookie("token") == "user") {
      Router.push("/dashboard/profile");
      return;
    }

    return (
      <Layout>
        <div className="my-3 flex flex-col bg-white p-14 md:p-12">
          <p className="m-2 text-center font-sans text-3xl font-black">
            WELLCOME BACK
          </p>
          <hr className="md:mx-auto md:w-7/12" />
          <div className="flex flex-row justify-center">
            <div className="hidden md:flex md:basis-2/6 md:flex-col md:px-12 m-5">
              <p className="">Not a member yet?</p>
              <p className="my-4">
                By creating an account with this site, you will be able to share
                your emotions with a Poster and to share your story with a
                Photo-Strip.
              </p>
              <Link href="/auth/signup" className="bg-red p-2 text-center">
                Register
              </Link>
            </div>
            <div className="flex basis-full flex-col md:basis-2/6 md:px-12 m-5">
              <p>Login here with:</p>
              <button className="flex flex-row justify-center my-2 p-2 border border-gray-500 bg-w">
                <Image src={google} width={25} height={25} alt="login with google"/>
                <p className="mx-2 font-bold">google</p>
              </button>
              <button className="flex flex-row justify-center bg-blue-facebook my-2 p-2">
                <Image src={facebook} width={25} height={25} alt="login with google"/>
                <p className="mx-2 font-bold c-white">facebook</p>
              </button>
              <p className="text-center">or</p>
              <Login />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default SignIn;
