/* eslint-disable jsx-a11y/anchor-is-valid */
import { motion } from 'framer-motion';
import Link from 'next/link';

import { headerAnimation } from '../animations/Register.animations';

import Background from './Background';
import RegistrationForm from './RegistrationForm';

const Register = () => (
  <div className="flex min-h-screen flex-col items-center justify-center text-white">
    <Background />

    <motion.div
      variants={headerAnimation}
      initial="from"
      animate="to"
      className="-mt-24 w-full p-4 sm:mt-0 sm:p-7 2xl:-mt-36"
    >
      <h1 className="text-center text-4xl font-semibold leading-tight xl:text-6xl">
        加入我們，感動世界
      </h1>
      {/* <h4 className="hidden text-center text-xl sm:block xl:text-2xl">
        Join us to get our newsletters, discount codes and more!
      </h4> */}

      {/* eslint-disable-next-line prettier/prettier */}
      <div className="w-full text-center">
        <Link href="/login" legacyBehavior>
          <a className="underline">已有賬號? 即刻登录!</a>
        </Link>
      </div>

      <div className="mt-10">
        <RegistrationForm />
      </div>
    </motion.div>
  </div>
);

export default Register;
