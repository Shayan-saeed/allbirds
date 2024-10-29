import React from 'react';

const Page = () => {
  
  return (
    <div className="flex flex-wrap bg-[#f2ece9] p-8 md:p-36">
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-xl font-bold mb-4">LOGIN</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input type="email" required className="w-full p-2 border bg-white text-black" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Password</label>
            <input type="password" required className="w-full p-2 border bg-white text-black" />
          </div>
          <button type="submit" className="w-full font-bold bg-black text-white hover:text-black hover:bg-white hover:border-2 hover:border-black transition p-2 mt-4">
            SIGN IN
          </button>
        </form>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-xl font-bold mb-4">CREATE AN ACCOUNT</h2>
        <p className="mb-2">We never save credit card information.</p>
        <p className="mb-4">Registering makes checkout fast and easy and saves your order information in your account.</p>
        <form>
          <div className="mb-4">
            <label className="block mb-2">Name</label>
            <input type="text" required className="w-full p-2 border bg-white text-black" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input type="email" required className="w-full p-2 border bg-white text-black" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Password</label>
            <input type="password" required className="w-full p-2 border bg-white text-black" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Confirm Password</label>
            <input type="password" required className="w-full p-2 border bg-white text-black" />
          </div>
          <button type="submit" className="w-full font-bold bg-black text-white hover:text-black hover:bg-white hover:border-2 hover:border-black transition p-2 mt-4">
            REGISTER
          </button>
        </form>
      </div>
    </div>
  );
}
export default Page;