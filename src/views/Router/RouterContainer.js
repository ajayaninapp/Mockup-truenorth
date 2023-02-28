import TableView from "../TableView";
import SigninCard from "../../Components/SigninCard";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "../../Layouts/AuthLayout";
import MainLayout from "../../Layouts/MainLayout";
import CustomerForm from "../CustomerForm/CustomerForm";
import CustomerView from "../CustomerView/CustomerView";
import ForgotPasswordForm from "../ForgotPassword/ForgotPasswordForm";
import ResetPassword from "../ResetPassword/ResetPassword";
import UserTable from "../UserTable";
import AddUser from "../adduser/AddUser";
import EmailBox from "../ForgotPassword/EmailBox";

const RouterContainer = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <TableView />
              </MainLayout>
            }
          />
          <Route
            path="/users"
            element={
              <MainLayout>
                <TableView />
              </MainLayout>
            }
          />
          <Route
            path="/customers"
            element={
              <MainLayout>
                <CustomerView />
              </MainLayout>
            }
          />
            
            
            <Route
            path="/customers/add-new"
            element={
              <MainLayout>
                <CustomerForm />
              </MainLayout>
            }
          />
         
          
          <Route
            path="/users/add-new"
            element={
              <MainLayout>
                <AddUser />
              </MainLayout>
            }
          />
          <Route
            path="/Mockup-truenorth/forgot-password"
            element={
              <AuthLayout>
                <EmailBox/>
              </AuthLayout>
            }
          />
          <Route
            path="/Mockup-truenorth/forgot-password"
            element={
              <AuthLayout>
                <ForgotPasswordForm/>
              </AuthLayout>
            }
          />
          <Route
            path="/Mockup-truenorth/"
            element={
              <AuthLayout>
                <SigninCard />
              </AuthLayout>
            }
          />
          <Route
            exact
            path="/reset-password"
            element={
              <MainLayout>
                <ResetPassword />
              </MainLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouterContainer;
