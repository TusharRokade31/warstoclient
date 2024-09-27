"use client";
import { Suspense } from "react";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/authSlice";

// Define a fallback UI while loading
const Loading = () => <div>Loading...</div>;

const AuthSuccessComponent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      localStorage.setItem("token", token);
      dispatch(setUser(token));
      setTimeout(() => router.push("/"), 100);
    }
  }, [router, dispatch]);

  return <div>Redirecting...</div>;
};

// Wrap the component in Suspense with a fallback
const AuthSuccess = () => (
  <Suspense fallback={<Loading />}>
    <AuthSuccessComponent />
  </Suspense>
);

export default AuthSuccess;
