"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";

const Login = () => {
  const { data, status } = useSession();
  const router = useRouter();
  console.log(data, " ", status);

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn("google")}>
          sign in with google
        </div>
        <div className={styles.socialButton}>sign in with github</div>
        <div className={styles.socialButton}>sign in with facebook</div>
      </div>
    </div>
  );
};

export default Login;
