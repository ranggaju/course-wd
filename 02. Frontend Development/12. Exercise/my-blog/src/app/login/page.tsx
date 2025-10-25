"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

const LogIn = () => {
  const router = useRouter();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().min(6, "Minimum 6 characters").required("Required"),
  });

  const handleSubmit = (values: typeof initialValues) => {
    console.log("Form data", values);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <h1 className="text-3xl font-bold mb-6">Login</h1>

      <div className="w-80 p-6">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-4">
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-sm text-red-500 mt-1"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Password</label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-sm text-red-500 mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
              >
                {isSubmitting ? "Loading..." : "Login"}
              </button>
              <p className="text-center text-sm text-gray-600 mt-2">
                Don&apos;t have an account?{" "}
                <button
                  type="button"
                  onClick={() => router.push("/register")}
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                  Register
                </button>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LogIn;
