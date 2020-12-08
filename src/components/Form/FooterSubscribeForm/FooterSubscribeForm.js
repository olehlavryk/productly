import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Button from "src/components/Button/Button";
import "./FooterSubscribeForm.css";

const FooterSubscribeSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

export const FooterSubscribeForm = () => (
  <div>
    <Formik
      initialValues={{
        firstName: "",
      }}
      validationSchema={FooterSubscribeSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="footer__subscribe">
          <Field name="email" type="email" />
          {errors.email && touched.email ? (
            <span className="error__label">{errors.email}</span>
          ) : null}
          <Button type="submit" className="">
            Sign up now
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default FooterSubscribeForm;
