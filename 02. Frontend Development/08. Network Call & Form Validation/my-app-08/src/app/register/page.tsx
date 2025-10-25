"use client";

import { Formik, Form, FormikProps } from "formik";
import * as Yup from "yup";

interface IRegister {
  email: string;
  password: string;
}

const RegisterSchema = Yup.object({
  email: Yup.string()
    .trim()
    .email("Wrong email format")
    .required("Please input Email"),
  password: Yup.string()
    .trim()
    .min(8, "8 characters minimum")
    .required("Please input password"),
});

export default function Register() {
  const initialValues: IRegister = { email: "", password: "" };

  const register = async (values: IRegister) => {
    try {
      const req = await fetch(
        "https://snazzyrod-us.backendless.app/api/data/user",
        {
          method: "POST",
          body: JSON.stringify({
            email: values.email,
            password: values.password,
          }),
        }
      );
      const res = await req.json();
      alert("Register successful");
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      } else {
        console.log("Unknown Error", err);
      }
    }
  };

  return (
    <div className="flex justify-center mt-[88px]">
      <Formik<IRegister>
        initialValues={initialValues}
        validationSchema={RegisterSchema}
        onSubmit={(values) => register(values)}
      >
        {(formik: FormikProps<IRegister>) => {
          return (
            <Form className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label>Email</label>
                <input
                  className="border border-black p-2 rounded-sm w-[480px]"
                  type="text"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.touched.email && formik.errors.email && (
                  <span className="text-red-500 text-[12px]">
                    *{formik.errors.email}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label>Password</label>
                <input
                  className="border border-black p-2 rounded-sm w-[480px]"
                  type="text"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                {formik.touched.password && formik.errors.password && (
                  <span className="text-red-500 text-[12px]">
                    *{formik.errors.password}
                  </span>
                )}
              </div>
              <button
                className="border border-black p-2 rounded-sm"
                type="submit"
              >
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
