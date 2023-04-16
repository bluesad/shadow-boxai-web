/* eslint-disable jsx-a11y/anchor-is-valid */
import { motion } from 'framer-motion';
import Link from 'next/link';

import { headerAnimation } from '../animations/Login.animations';

import LoginForm from './LoginForm';

const Login = () => (
  <div className="flex min-h-screen flex-col items-center justify-center">
    <motion.div
      variants={headerAnimation}
      initial="from"
      animate="to"
      className="-mt-24 w-full p-4 sm:mt-0 sm:p-7 2xl:-mt-36"
    >
      <h1 className="text-center text-4xl font-semibold leading-tight xl:text-6xl">登录即刻创作</h1>

      {/* eslint-disable-next-line prettier/prettier */}
      <div className="w-full text-center">
        <Link href="/register">
          <span className="underline">新用户注册!</span>
        </Link>
      </div>

      <div className="mt-10">
        <LoginForm />
      </div>
    </motion.div>
  </div>
);

export default Login;
